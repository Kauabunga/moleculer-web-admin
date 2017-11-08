import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { default as MaterialToolbar } from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { styles } from './Toolbar.styles';

class Toolbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <MaterialToolbar className={classes.toolBar}>
          <Link to="/nodes">
            <h4>Nodes</h4>
          </Link>
          <Link to="/services">
            <h4>Services</h4>
          </Link>
          <Typography type="title" color="inherit">
            DEMO
          </Typography>
        </MaterialToolbar>
      </AppBar>
    );
  }
}

export default injectSheet(styles)(Toolbar);
