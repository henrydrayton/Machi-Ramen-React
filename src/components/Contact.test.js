import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import React from 'react'

test('renders contact details', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Phone Number/i);
  expect(linkElement).toBeInTheDocument();
});
