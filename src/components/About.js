import React from 'react'
import './About.css'


function About() {
    return (
        <div>
            <img src="/images/about.png" alt="about image" class="about"/>
            <div className="origin">
                <h3>Our Origins</h3>
                <p>In Japanese, Machi Ramen means street Ramen. Machi Ramen took inspiration from Japanese street
                     Ramen carts where late night workers returning home early in the morning often stop to have a 
                     quick meal. Machi Ramen’s mission is to bring Japanese food to the most common people and serve 
                     them at the most reasonable price. 
                </p>
            </div>
                <div className="authentic">
                    <h3>Authentic Food</h3>
                    <p>We proudly offer our customers everything hand-made: we make our noodles, our broth, 
                        our Chasyu pork and everything else daily, and from scratch. When customers take a seat
                        at our restaurant, they can rest assured that we are offering them the food that we make
                        with our hands, with our utmost care and our gratitude towards them choosing us among 
                        various choices they have at hand.
                    </p>
                </div>
            <div className="origin">
                <h3>Culture</h3>
                <p>We understand that we are not only selling noodles, we are also spreading Japanese culture. 
                    At Machi Ramen, we want our customer to feel like they have just walked into a cozy restaurant 
                    at the corner of a street in Osaka. We hope that we can somehow lessen your nostalgia for Japan
                     because we know that that nostalgia can be too much sometimes.
                </p>
            </div>
            <div>
                <h4>We wish that every single visit to Machi Ramen would recharge you with more energy to continue 
                    working and experiencing everything that life has to offer.
                </h4>
            </div>
        </div>
    );
}

export default About;