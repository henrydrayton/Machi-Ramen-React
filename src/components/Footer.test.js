import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react'

// This test uses the getByText method to check whether the string 'sydney' renders on the page.
// If it does, the test passes. 

test('renders footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/sydney/i);
  expect(linkElement).toBeInTheDocument();
});
