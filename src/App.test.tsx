import { render, screen } from '@testing-library/react';
import App from './App';

// Define the test case
test('renders learn react link', () => {
  render(<App />);
  // Look for the element with text 'learn react'
  const linkElement = screen.getByText(/learn react/i);
  // Assert that the element is present in the document
  expect(linkElement).toBeInTheDocument();
});
