const path = require('path');
const fs = require('fs');

const React = require('react');
const {Provider} = require('react-redux');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');
const {JssProvider, SheetsRegistry} = require('react-jss');

const {createStore} = require('redux');
const {default: routes} = require('../src/global/routes');
const {default: createGlobalReducer} = require('../src/global/reducer');
const {default: App} = require('../src/containers/App/App');

const sheets = new SheetsRegistry();

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const context = {};
    const store = createStore(createGlobalReducer());

    const markup = renderToString(
      <JssProvider registry={sheets}>
        <Provider store={store}>
          <StaticRouter
            location={{pathname: req.url}}
            context={context}
          >
            {routes}
          </StaticRouter>
        </Provider>
      </JssProvider>
    );

    if (context.url) {
      res.redirect(301, context.url)
    } else {
      const RenderedApp = htmlData
        .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
        .replace('</head>', `<style>${sheets.toString()}</style></head>`)
        .replace(/<link href="\/static\/css\/main\..*\.css" rel="stylesheet">/g, '')
        .replace(
          /<script type="text\/javascript" src="\/static\/js\//g,
          '<script async type="text/javascript" src="/static/js/'
        );
      res.send(RenderedApp);
    }
  })
};
