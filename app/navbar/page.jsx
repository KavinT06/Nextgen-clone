'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assets/svg/sec1/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-sm">
                <div className='h-20 lg:h-18 md:h-16 flex items-center justify-between px-6 lg:px-8 md:px-4'>
                    {/* Logo */}
                    <div className='xl:ml-44 lg:ml-10 md:ml-0' >
                        <Link href="/navbar">
                            <Image src={Logo} alt='Nextgen' />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex gap-5 lg:gap-3 items-center'>
                        <div className='flex gap-8 md:gap-5 lg:gap-6 font-bold lg:font-semibold xl:font-bold lg:text-lg md:text-base'>
                            <h1 className='cursor-pointer hover:text-primary transition-colors'>Home</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors'>Features</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors'>Community</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors'>Blog</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors'>Pricing</h1>
                        </div>
                        <div className='ml-5'>
                            <button className='bg-[#4caf4f] w-44 lg:w-36 h-10 lg:h-9 text-white font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-[#3d9142] transition-colors'>
                                Register Now 
                                <FontAwesomeIcon icon={faArrowRight} className='w-4' />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <div className='md:hidden'>
                        <button 
                            onClick={toggleMenu} 
                            className='text-2xl focus:outline-none'
                            aria-label='Toggle menu'
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='md:hidden bg-white border-t border-gray-200 shadow-lg'>
                        <div className='flex flex-col gap-4 px-6 py-5 font-medium text-base'>
                            <h1 className='cursor-pointer hover:text-primary transition-colors py-2'>Home</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors py-2'>Features</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors py-2'>Community</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors py-2'>Blog</h1>
                            <h1 className='cursor-pointer hover:text-primary transition-colors py-2'>Pricing</h1>
                            <button className='bg-[#4caf4f] w-full h-12 text-white font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-[#3d9142] transition-colors mt-2'>
                                Register Now 
                                <FontAwesomeIcon icon={faArrowRight} className='w-4' />
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};