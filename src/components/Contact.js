import React from 'react'
import './Contact.css'


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
