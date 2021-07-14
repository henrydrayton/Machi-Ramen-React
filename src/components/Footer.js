import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>MACHI RAMEN</h4>
            <h5 className="list-unstyled">
              <li>1234 567 890</li>
              <li>Sydney, Australia</li>
              <li>123 Street Ultimo</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <p>
                <ui className="list-unstyled">
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ui>
            </p>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>More Stuff</h4>
            <p>
                <ui className="list-unstyled">
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ui>
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
