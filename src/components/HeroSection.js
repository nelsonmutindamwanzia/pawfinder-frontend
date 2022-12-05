import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className ='hero-container' >
            <h1>WELCOME TO KENYA!</h1>
            <p>Let's dive in</p>
            <div className = 'hero-btns'>
                <Button className = 'btns' buttonStyle= 'btn--outline' buttonSize = 'btn--large' >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection