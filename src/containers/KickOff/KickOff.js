import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import KickOffIntroduction from '../../components/app/KickOffIntroduction/KickOffIntroduction';
import PreliminaryInformationForm from '../../components/forms/PreliminaryInformationForm/PreliminaryInformationForm';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  selectEmploymentStatuses,
  selectPartyTypes,
  selectProducts,
  selectProfessions,
} from './KickOff.selectors';
import { updateKickOffData } from '../../global/application/application.actions';
import { FORM_NAME } from '../../components/forms/PreliminaryInformationForm/PreliminaryInformationForm.constants';
import { selectKickOffData } from '../../global/application/application.selectors';
import { initialize } from 'redux-form';

export class KickOff extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.actions.initialize(FORM_NAME, nextProps.initialValues);
  }

  handleSubmit(values) {
    console.log('KickOff handleSubmit', values);
  }

  handleChange(values) {
    this.props.actions.updateKickOffData(values);
  }

  render() {
    const { employmentStatuses, professions, products, partyTypes } = this.props;
    return (
      <div>
        <Helmet>
          <title>Kick off</title>
        </Helmet>

        <KickOffIntroduction />

        <PreliminaryInformationForm
          onSubmit={this.handleSubmit.bind(this)}
          onChange={this.handleChange.bind(this)}
          professions={professions}
          products={products}
          partyTypes={partyTypes}
          employmentStatuses={employmentStatuses}
        />
      </div>
    );
  }
}

KickOff.defaultProps = {
  employmentStatuses: [],
  professions: [],
  partyTypes: [],
  products: [],
};

KickOff.propTypes = {
  employmentStatuses: PropTypes.array.isRequired,
  professions: PropTypes.array.isRequired,
  partyTypes: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  initialValues: selectKickOffData(state),

  employmentStatuses: selectEmploymentStatuses(state),
  professions: selectProfessions(state),
  partyTypes: selectPartyTypes(state),
  products: selectProducts(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateKickOffData, initialize }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(KickOff));
