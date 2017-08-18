import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Application.css';
import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ApplicationProgress from '../../components/app/ApplicationProgress/ApplicationProgress';

export class Application extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>Application</title>
        </Helmet>

        <ApplicationProgress />

        <div className="Application">
          {children}
        </div>
      </div>
    );
  }
}

Application.defaultProps = {};

Application.propTypes = {
  // children: PropTypes.insta
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Application));