import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the product card and default greeting', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /the sunday camera/i })).toBeInTheDocument();
  expect(screen.getByText('$249.00')).toBeInTheDocument();
  expect(screen.getByRole('region', { name: 'Hello, there.' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /the sunday camera/i })).toBeInTheDocument();
});
