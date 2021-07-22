import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import React from 'react'

test('renders footer', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/sydney/i);
  expect(linkElement).toBeInTheDocument();
});
