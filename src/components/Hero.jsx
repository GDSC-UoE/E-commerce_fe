import React from 'react';

function Hero() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-10'>
            {/* Left side */}
            <div className="text-white md:w-1/2 p-5">
                <h2 className='text-7xl font-bold mb-4'>Buy your Dream Car Today</h2>
                <p className='text-2xl font-semibold mb-6'>Purchase your dream car with the best deals and offers.</p>
                <button className='bg-yellow-500 text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-yellow-600 transition duration-300'>Shop Now</button>
            </div>

            {/* Right side */}
            <div className="md:w-1/2 p-5">
                <img src="/hero-image.jpg" alt="Dream Car" className='w-full h-auto rounded-lg shadow-lg' />
            </div>
        </div>
    );
}

export default Hero;
