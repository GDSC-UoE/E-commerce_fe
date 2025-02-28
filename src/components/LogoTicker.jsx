import React from 'react';

function LogoTicker() {
    return (
        <div className='flex flex-col justify-center items-center space-y-4 p-4 bg-gray-100'>
            <p className="text-center text-lg font-semibold text-gray-700">Trusted by</p>
            <div className="flex flex-wrap justify-center items-center space-x-6">
                <img loading='lazy' src="/logos/tesla.svg" alt="Tesla Logo" className='h-16 w-auto' />
                <img loading='lazy' src="/logos/toyota.svg" alt="Toyota Logo" className='h-16 w-auto' />
                <img loading='lazy' src="/logos/Lamborghini.svg" alt="Lamborghini Logo" className='h-16 w-auto' />
            </div>
        </div>
    );
}

export default LogoTicker;
