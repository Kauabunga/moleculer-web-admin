import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadNodesRequest } from '../../global/nodes/nodes.actions';
import {
  loadActionsRequest,
  loadServicesRequest,
  loadStatsRequest,
} from '../../global/services/services.actions';

export class Services extends Component {
  componentWillMount() {
    this.props.actions.loadServicesRequest();
    this.props.actions.loadActionsRequest();
    this.props.actions.loadStatsRequest();
  }

  findActionsForService(name) {
    const { serviceActions } = this.props;
    return serviceActions.filter(action => action.name.indexOf(name) === 0);
  }

  render() {
    const { services, stats, serviceActions } = this.props;

    return (
      <div>
        <Helmet>
          <title>Services</title>
        </Helmet>

        {services.map((service, i) => (
          <div key={service.name}>
            <h1>{service.name}</h1>
            {this.findActionsForService(service.name).map(action => (
              <div key={action.name}>{action.name}</div>
            ))}
          </div>
        ))}

        <pre>{JSON.stringify(services, null, 2)}</pre>

        <pre>{JSON.stringify(serviceActions, null, 2)}</pre>

        <pre>{JSON.stringify(stats, null, 2)}</pre>
      </div>
    );
  }
}

Services.defaultProps = {
  services: [],
  actions: [],
  stats: {},
};

Services.propTypes = {};

const mapStateToProps = state => ({
  services: Object.values(state.services.services),
  serviceActions: Object.values(state.services.actions),
  stats: state.services.stats,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { loadServicesRequest, loadActionsRequest, loadStatsRequest },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
