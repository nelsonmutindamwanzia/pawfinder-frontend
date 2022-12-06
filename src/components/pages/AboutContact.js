import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';

function AboutContact() {
    return (
    <React.Fragment>
        <div className='about'>
            <Card body className = "about-card">
                <h1>About Us</h1>
                <p><strong>PawFinder</strong> Is a web application that aims to make the process of searching for lost pets easier and rid distraught pet owners of unnecessary burdens. PawFinder uses a RESTful API that allows its users to post their missing pets and delete the posts after finding them.</p> <br />
                <h1>Contact Information</h1> <br />
                <ul class="contact-content">
                    <li>
                        <i class="fa fa-map-marker"></i>
                        <p> Nairobi, Kenya</p><br/>
                    </li>
                    <li>
                        <i class="fa fa-envelope"></i>
                        <p>nmutinda02@gmail.com</p><br/>
                    </li>
                    </ul>
            </Card>
        </div>
    </React.Fragment>
    )
}

export default AboutContact;