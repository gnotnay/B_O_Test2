import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders AppBar', () => {
  const { getByText, getByTestId } = render(<Menu />);
  expect(getByTestId('Toolbar')).toBeInTheDocument();
  expect(getByTestId('IconButton')).toBeInTheDocument();
  expect(getByTestId('function-name')).toBeInTheDocument();

  const linkElement = getByText(/Most Recent Block/i);
  expect(linkElement).toBeInTheDocument();
});
