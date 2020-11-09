import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders click me link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/click me/i);
  expect(linkElement).toBeInTheDocument();
});
