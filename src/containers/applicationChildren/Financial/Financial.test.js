import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Financial } from './Financial';

it('renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Financial />);
});
