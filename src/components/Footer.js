import React from 'react'
import './Footer.css'

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
                    &copy;{new Date().getFullYear()} MACHI RAMEN | All rights reserved |
                    Terms Of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
