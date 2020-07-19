import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


test('renders header with conal.tech text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/conal.tech/i);
  expect(linkElement).toBeInTheDocument();
});

