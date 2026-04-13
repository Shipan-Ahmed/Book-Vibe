import React from 'react';

import heroPic from '../assets/hero_img.jpg'

const HeroBanner = () => {
    return (
        <section className='flex justify-between items-center p-20 bg-base-300'>
            <div>
                <h1 className='text-6xl mb-10'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-400 text-white'>View The List</button>
            </div>
            <div>
                <img className='mx-auto' src={heroPic} alt="Books" />
            </div>
        </section>
    );
};

export default HeroBanner;