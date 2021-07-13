import React from 'react'
import { Link } from 'react-router-dom' 

function Navv() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="nav">
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/menu'>
                    <li>Menu</li>
                </Link>
                <Link style={navStyle} to='/contact'>
                    <li>Contact</li>
                </Link>
                <Link style={navStyle} to='/login'>
                    <li>Log In</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navv;
