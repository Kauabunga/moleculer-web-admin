import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Services } from './Services';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Services />);
});
