import React from 'react'
import { Link } from 'react-router-dom' 
import '../App.css'
import './Home.css'


const buttonStyle = {
   
};

function Home() {
    return (
        <div className="container-home">
            <div className="content-wrapper">
                <img src="/images/home.jpg" alt="homepage" className="home"/>
                <div className="text-wrapper">
                    <h1>Machi Ramen</h1>
                    <p>We are formed based on the philosophy of finding, preserving and spreading 
                        original flavors to everyone.
                    </p>
                    <Link style={buttonStyle} to='/about'>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">LEARN MORE</button>
                    </Link>
                </div>
            </div>

            <div>
                <h2 className="padTop">Japanese Street Food Specalists</h2>
                <p>We are formed based on the philosophy of finding, 
                    preserving and spreading original flavors to everyone.
                </p>
            </div>





{/* NEW CSS */}

        <div className="screenshot">
            <div className="screenshot-item">
                <img src="/images/family.png" alt="homepage" className="home-image"/>
                <h3>Family Run</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="buttonClass">
                    <Link style={buttonStyle} to='/about'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                    </Link>
                </div>
            </div>


            <div className="screenshot-item">
                <img src="/images/authentic.png" alt="homepage" className="home-image"/>
                <h3>Authentic</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="buttonClass">
                    <Link style={buttonStyle} to='/about'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                    </Link>
                </div>
            </div>


            <div className="screenshot-item">
                <img src="/images/cosy.png" alt="homepage" className="home-image"/>
                <h3>Cosy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="buttonClass">
                    <Link style={buttonStyle} to='/about'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                    </Link>
                </div>
            </div>
        </div>



{/* OLD CSS */}




            {/* <div className="text">
                <h3>Family Run</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src="/images/family.png" alt="homepage" className="home-image"/>
                <Link style={buttonStyle} to='/about'>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                </Link>
            </div>
            <div className="text">
                <h3>Authentic</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src="/images/authentic.png" alt="homepage" className="home-image"/>
                <Link style={buttonStyle} to='/about'>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                </Link>
            </div>
            <div className="padBottom text">
                <h3>Cosy</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src="/images/cosy.png" alt="homepage" className="home-image"/>
                <Link style={buttonStyle} to='/about'>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LEARN MORE</button>
                </Link>
            </div> */}
        </div>
    );
}

export default Home;