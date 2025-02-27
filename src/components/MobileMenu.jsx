import { XIcon } from 'lucide-react'
import React from 'react'

function MobileMenu({ openMenu, setOpenMenu }) {
    return (
        <div className='absolute top-0 left-0 z-10 backdrop-blur-sm min-h-[100vh] min-w-[100vw] text-center p-5'>
            <XIcon size={64} onClick={() => setOpenMenu(false)} className='absolute right-0' />
            <ul className='flex flex-col mt-20 px-5'>
                <li className='border-b border-black py-10'>Home</li>
                <li className='border-b border-black py-10'>Products</li>
                <li className='border-b border-black py-10'>About</li>
                <li className='border-b border-black py-10'>Contact Us</li>
            </ul>
        </div>
    )
}

export default MobileMenu