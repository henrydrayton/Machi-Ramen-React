import React from 'react'
import { Link } from 'react-router-dom' 


const buttonStyle = {
};

function Home() {
    return (
        <div>
            <div>
                <h1>Machi Ramen</h1>
                <p>We are formed based on the philosophy of finding, preserving and spreading 
                    original flavors to everyone.
                </p>
            </div>
            <div>
                <h2>Japanese Street Food Specalists</h2>
                <p>We are formed based on the philosophy of finding, 
                    preserving and spreading original flavors to everyone.
                </p>
            </div>
            <div>
                <h3>Family Run</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link style={buttonStyle} to='/about'>
                    <button>LEARN MORE</button>
                </Link>
            </div>
            <div>
                <h3>Authentic</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link style={buttonStyle} to='/about'>
                    <button>LEARN MORE</button>
                </Link>
            </div>
            <div>
                <h3>Cosy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link style={buttonStyle} to='/about'>
                    <button>LEARN MORE</button>
                </Link>
            </div>
            
                
                
           

        </div>
    );
}

export default Home;
