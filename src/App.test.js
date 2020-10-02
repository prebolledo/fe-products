import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app OK', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Resultados para/i);
  expect(element).toBeInTheDocument();
});
