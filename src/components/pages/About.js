import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
    <React.Fragment>
        <div className='about'>
            <Card body className = "about-card">
                <h1>About Us</h1>
                <p><strong>TraDvisor</strong> Is a travel advisory application. When it comes to the holiday season, most households find themselves visiting travel advisory websites looking to get a suggestion for a holiday destination that would best suit their needs. This web application makes use of a RESTful API, that will contain information about local holiday destinations that are not commonly found on other travel advisory pages. It is accessible both on mobile devices and desktop or laptop computers. It also has a Navigation Bar incoorporated into it to allow easy navigation through the webpages.</p> <br />
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