import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="main-footer">
      <div className="items-container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5 className="list-unstyled">
                <h4>MACHI RAMEN</h4>
              <li>1234 567 890</li>
              <li>Sydney, Australia</li>
              <li>123 Street Ultimo</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <p>
                <ui className="list-unstyled">
                    <h4>
                        <li>Stuff</li>
                    </h4>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ui>
            </p>
          </div>
          {/* Column3 */}
          <div className="col">
            <p>
                <ui className="list-unstyled">
                    <h4>
                        <li>More Stuff</li>
                    </h4>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ui>
            </p>
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
