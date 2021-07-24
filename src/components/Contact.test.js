import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import React from 'react'


//  This test is used to test if the content is rendered correctly.
//  It looks for the string 'Phone Number' on the contact page using the getByText method. 
//   If the text is rendered correctly it will pass. 

test('renders contact details', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Phone Number/i);
  expect(linkElement).toBeInTheDocument();
});
