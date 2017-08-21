import React, { Component } from 'react';
import BaseField from '../BaseField/BaseField';
import Select from 'react-select';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

// TODO create UI Select Input component
// TODO create UI Label component

class SelectField extends Component {
  render() {
    const { options, input } = this.props;

    if (input.name === 'employment') {
      console.log('emplyoment select error', this.props.meta.error);
    }

    return (
      <BaseField {...this.props}>
        <Select
          clearable={false}
          searchable={false}
          value={input && input.value}
          onChange={option => input.onChange((option && option.value) || null)}
          onBlur={(event, newValue, previousValue) => input.onBlur(newValue)}
          onFocus={(event, newValue, previousValue) => input.onFocus(event)}
          options={options}
        />
      </BaseField>
    );
  }
}

export default SelectField;
