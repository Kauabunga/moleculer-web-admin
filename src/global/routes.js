import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import App from '../containers/Root/Root';
import Nodes from '../containers/Nodes/Nodes';
import NotFound from '../containers/NotFound/NotFound';
import Services from '../containers/Services/Services';

const routes = (
  <App>
    <Switch>
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/nodes" component={Nodes} />
      <Route exact path="/services" component={Services} />

      <Redirect from="/" to="/nodes" />
      <Redirect from="*" to="/404" />
    </Switch>
  </App>
);

export default routes;
