import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Books from './Books';

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Books></Books>
        </div>
    );
};

export default HomePage;