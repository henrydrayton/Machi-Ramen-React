import React from 'react'
import './Contact.css'


// This page is purely used to render text on the Contact page.
// The text is held within a container for styling purposes. 
// The styling is held within a separate Contact.css file which has been imported. 

function Contact() {
    return (
        <div>
            <div className= "touch">
                <h1>Get In Touch</h1>
            </div>
            <div className="info">
                <div>
                    <h3>Phone Number</h3>
                    <p>1234567890</p>
                </div>
                <br></br>
                <div>
                    <h3>Email</h3>
                    <p>test@test.com</p>
                </div>
                <br></br>
                 <div>
                    <h3>Address</h3>
                    <p>123 Street, Ultimo</p>
                </div>
            </div>
        </div>

    );
}

export default Contact;
