import { MenuIcon, ShoppingCartIcon, User, XIcon } from 'lucide-react';
import React, { useState } from 'react'
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

function Navbar() {
    // Toggle Mobile Menu

    const [openMenu, setOpenMenu] = useState(false);


    return (
        <div className='flex justify-between items-center p-8 relative'>
            {/* Logo side */}
            <div className="">

                <img src="/web-logo.svg" alt="" />
            </div>

            {/* Nav Links  */}
            <ul className='hidden md:flex gap-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>

            {/* Cart button / User Icon */}
            <div className="hidden md:flex gap-4">
                <User size={32} />
                <ShoppingCartIcon size={32} />
            </div>

            {/* Mobile Menu icon */}
            <div className="flex md:hidden">
                {/* Conditionally render menu icon */}
                {
                    openMenu ? <XIcon size={32} /> : <MenuIcon size={32} onClick={() => setOpenMenu(true)} />
                }
            </div>
            {
                openMenu && <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
            }
        </div>
    )
}

export default Navbar