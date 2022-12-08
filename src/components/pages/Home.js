import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Review from '../Review';

function Home() {
    return (
    <>
        <HeroSection />
        <Cards />
        <Review />
    </>
    );
}

export default Home;