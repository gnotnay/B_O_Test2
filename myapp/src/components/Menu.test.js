import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders AppBar', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText(/Most Recent Block/i);
  expect(linkElement).toBeInTheDocument();
});
