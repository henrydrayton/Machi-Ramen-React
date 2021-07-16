import React from 'react'
import { Link } from 'react-router-dom' 

function Navv() {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <nav className="nav">
            <h3 className="list-unstyled">Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>HOME</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>ABOUT</li>
                </Link>
                <Link style={navStyle} to='/menu'>
                    <li>MENU</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>CONTACT</li>
                </Link>
                <Link style={navStyle} to='/signin'>
                    <li>LOG IN</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navv;
