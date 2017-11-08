import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadNodesRequest } from '../../global/nodes/nodes.actions';
import { loadActionsRequest, loadServicesRequest } from '../../global/services/services.actions';

export class Nodes extends Component {
  componentWillMount() {
    this.props.actions.loadNodesRequest();
    this.props.actions.loadServicesRequest();
    this.props.actions.loadActionsRequest();
  }

  findServicesForNode(id) {
    const { services } = this.props;
    return services.filter(service => service.nodes.includes(id));
  }

  render() {
    const { nodes, services } = this.props;

    return (
      <div>
        <Helmet>
          <title>Nodes</title>
        </Helmet>

        {nodes.map((node, i) => (
          <div key={node.id}>
            <h1>{node.id}</h1>
            {this.findServicesForNode(node.id).map(service => (
              <div key={service.name}>{service.name}</div>
            ))}
          </div>
        ))}

        <pre>{JSON.stringify(nodes, null, 2)}</pre>
      </div>
    );
  }
}

Nodes.defaultProps = {
  nodes: [],
  services: [],
};

Nodes.propTypes = {};

const mapStateToProps = state => ({
  nodes: Object.values(state.nodes.nodes),
  services: Object.values(state.services.services),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { loadNodesRequest, loadServicesRequest, loadActionsRequest },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
