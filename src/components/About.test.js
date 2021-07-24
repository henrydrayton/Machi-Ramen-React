import { render, screen } from '@testing-library/react';
import About from './About';
import React from 'react'

//  This test is used to test if the content is rendered correctly.
//  It looks for the string 'Our Origins' on the about page using the getByText method. 
//   If the text is rendered correctly it will pass. 


test('renders About page text', () => {
  render(<About />);
  const linkElement = screen.getByText(/Our Origins/i);
  expect(linkElement).toBeInTheDocument();
});
