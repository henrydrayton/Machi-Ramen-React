import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'; 

//  This test is used to test if the content is rendered correctly.
//  It looks for the string 'Machi Ramen' on the about page using the getByText method. 
//   If the text is rendered correctly it will pass. 

// The Static Router has been imported from 'react-router-dom' and is used in 
// conjunction withe the <Router></Router> tags.
// These tags are used to replicate the function of the 'Learn More' buttons which redirect the used to the About page. 



describe('Home', () => {
    it('should render home page text', () => {
        render(<Router><Home/></Router>);
        const text = screen.getByText(/Machi Ramen/i);
        expect(text).toBeInTheDocument();
    });

});