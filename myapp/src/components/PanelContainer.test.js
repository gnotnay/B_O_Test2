import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import PanelContainer from './PanelContainer';

afterEach(cleanup);

test('loads and displays data', async () => {
  const {} = render(<PanelContainer />)
});