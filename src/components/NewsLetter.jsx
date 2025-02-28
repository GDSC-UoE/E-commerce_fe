import React from 'react'

function NewsLetter() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500 px-10'>
            {/* Left side */}
            <div className="text-white md:w-1/2 p-2">
                <h2 className='text-5xl font-bold mb-4'>Subscribe to our Newsletter</h2>
                <p className='text-xl font-semibold mb-6'>Get the latest updates and offers directly in your inbox.</p>
                <div className='flex'>
                    <input type='email' placeholder='Enter your email' className='px-6 py-3 rounded-l-full text-black w-1/2 outline-none border-2 border-gray-200 bg-gray-200' />
                    <button className='bg-yellow-500 text-black px-6 py-2 rounded-r-full text-xl font-semibold hover:bg-yellow-600 transition duration-300'>Subscribe</button>
                </div>
            </div>

            {/* Right side */}
            <div className="md:w-1/2 p-2">
                <img src="/newsletter-image.png" alt="Newsletter" className='w-full h-auto' />
            </div>
        </div>
    );
}

export default NewsLetter;