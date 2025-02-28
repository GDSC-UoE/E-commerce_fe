import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-15 my-10 mt-40 text-sm mx-auto container px-10'>
            <div className="">
                <img src="/web-logo.svg" className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                </p>
            </div>
            <div className="">
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="">
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+25470000000</li>
                    <li>info@admin.co.ke</li>
                </ul>
            </div>

            <div className="">
                <hr />
                <p className='py-5 text-sm text-center'>

                    Copyright &copy; {new Date().getUTCFullYear()}
                </p>
            </div>
        </div>
    )
}

export default Footer