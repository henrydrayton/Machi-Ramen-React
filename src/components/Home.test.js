import { render, screen } from '@testing-library/react';
import Home from './Home';
import React from 'react'
import { StaticRouter as Router } from 'react-router-dom'; 

describe('Home', () => {
    it('should show "loading..."', () => {
        render(<Router><Home/></Router>);
        const text = screen.getByText(/Machi Ramen/i);
        expect(text).toBeInTheDocument();
    });

});