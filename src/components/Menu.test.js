import Menu from './Menu';
import { render, screen } from '@testing-library/react';
import { StaticRouter as Router } from 'react-router-dom'; 
import { createGlobalState } from 'react-hooks-global-state';

describe('Menu', () => {
    it('should show "Menu"', () => {
        render(<Router><Menu/></Router>);
        const text = screen.getByText(/Menu/i);
        expect(text).toBeInTheDocument();
    }); 

    it('should show the product list', () => {
        const itemsTest = [
            { category_id: 1, name: 'Gogeta', price: 16.02, description: 'One! Two! Three!' },
            { category_id: 2, name: 'Yajirobe', price: 24.96, description: 'I want your bunk!' }
        ];
        render(<Router><Menu itemsTest={itemsTest}/></Router>);
        const table = screen.getByRole('table');
        // expect(table).toHaveTextContent(/Gogeta/i);
        // expect(table).toHaveTextContent(/Yajirobe/i);
        const linkElement1 = screen.getByText(/Gogeta/i);
        const linkElement2 = screen.getByText(/Yajirobe/i);
        expect(linkElement1).toBeInTheDocument();
        expect(linkElement2).toBeInTheDocument();
    })
});