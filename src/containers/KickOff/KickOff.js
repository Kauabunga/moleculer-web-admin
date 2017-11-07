import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class KickOff extends Component {
  handleSubmit(values) {
    console.log('KickOff handleSubmit', values);
  }

  handleChange(values) {
    this.props.actions.updateKickOffData(values);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Kick off</title>
        </Helmet>
      </div>
    );
  }
}

KickOff.defaultProps = {};

KickOff.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KickOff));
