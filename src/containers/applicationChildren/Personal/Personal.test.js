import React from 'react';
import ReactDOM from 'react-dom';
import { Personal } from './Personal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Personal />, div);
});