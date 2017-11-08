import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Nodes } from './Nodes';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Nodes />);
});
