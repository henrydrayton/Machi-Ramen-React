import React from 'react'
import './Footer.css'


// This footer component is used throughout the entire application. 
// Although it serves limited functionality in this demonstration application. 
// In a real world scenario it would provide links to pages such as FAQ's, Terms and Conditions and Privacy statements. 
// The styling is held within a separate Footer.css file which has been imported. 


function Footer() {
  return (
    <div className="main-footer">
      <div className="items-container">
        <div className="row">

          {/* Column1 */}
          <div className="col">
            <h4 className="list-unstyled">MACHI RAMEN</h4>
                <h5 className="list-unstyled">
                    <li>1234 567 890</li>
                    <li>Sydney, Australia</li>
                    <li>123 Street Ultimo</li>
                </h5>
          </div>

          {/* Column2 */}
          <div className="col">
                <h4>
                    <li className="list-unstyled">Stuff</li>
                </h4>
            <ul className="list-unstyled">
                <p>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </p>
            </ul>
          </div>

        {/* Column3 */}
        <div className="col">
                <h4>
                    <li className="list-unstyled"> More Stuff</li>
                </h4>
            <ul className="list-unstyled">
                <p>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </p>
            </ul>
        </div>
    </div>
        <hr />
            <div className="row">
                <p className="col-sm">
{/* This method retrieves the current year and creates a string interpolation. 
This means that the website's Terms of Service and Privacy statements will remain current each year. */}
                    &copy;{new Date().getFullYear()} MACHI RAMEN | All rights reserved |
                    Terms Of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
