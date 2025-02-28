import React from 'react';

function NewsLetter() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-6 md:px-8 md:py-10 rounded-2xl container mx-auto'>
            {/* Left side */}
            <div className="text-white md:w-2/3 p-2">
                <h2 className='text-3xl md:text-4xl font-bold mb-2'>Subscribe to our Newsletter</h2>
                <p className='text-md md:text-lg mb-4'>Get the latest updates and offers directly in your inbox.</p>
                <div className='flex'>
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='px-4 py-2 rounded-l-full text-black w-2/3 outline-none border-2 border-gray-200 bg-gray-100'
                    />
                    <button
                        className='bg-yellow-500 text-black px-4 py-2 rounded-r-full font-semibold hover:bg-yellow-600 transition duration-300'
                    >
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Right side */}
            <div className="md:w-1/3 p-2">
                <img src="/newsletter-image.png" alt="Newsletter" className='max-w-full h-auto' />
            </div>
        </div>
    );
}

export default NewsLetter;
