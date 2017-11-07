import React, { Component } from 'react';
import Toolbar from '../../components/ui/Toolbar/Toolbar';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HotKeys } from 'react-hotkeys';
import canUseDOM from 'can-use-dom';
import injectSheet from 'react-jss';
import { styles } from './Root.styles';

export class Root extends Component {
  render() {
    const { classes, children } = this.props;

    const handlers = {
      reset: event => {
        window.sessionStorage.clear();
        window.location.href = '/';
      },
    };

    const keyMap = {
      reset: ['shift+del', 'shift+backspace'],
    };

    return (
      <div>
        <Helmet>
          <title>App</title>
        </Helmet>

        {canUseDOM ? (
          <HotKeys focused={true} keyMap={keyMap} attach={window} handlers={handlers} />
        ) : null}

        <Toolbar />

        <div className={classes.appRoot}>
          <div className={classes.appContainer}>{children}</div>
        </div>
      </div>
    );
  }
}

Root.defaultProps = {};

Root.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(Root)));
