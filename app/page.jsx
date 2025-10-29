import React from 'react';
import Image from 'next/image';
import Logo from "./assets/svg/Logo.svg";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heropng from "./assets/svg/Illustration.svg";

export default function Page() {
    return (
        <>
            <div className='h-20 flex items-center justify-around text-lg text-gray-600'>
                <div className='mr-40'>
                    <Image src={Logo} alt='Nextgen' />
                </div>
                <div className='flex gap-5 ml-56'>
                    <div className='flex gap-8 font-bold mt-2'>
                        <h1>Home</h1>
                        <h1>Features</h1>
                        <h1>Community</h1>
                        <h1>Blog</h1>
                        <h1>Pricing</h1>
                    </div>
                    <div className='items-center mt-1'>
                        <button className='bg-primary w-44 h-10 text-white font-medium rounded-sm flex items-center justify-center gap-1' >Register Now <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-1' /></button>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e2e4]'>
                <section className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-8 lg:py-24'>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex flex-col gap-6 justify-center mt-10'>
                            <p className='text-6xl font-medium'>
                                Lessons and insights <br /> <span className='text-[#4caf4f] leading-snug'>from 8 years</span> 
                            </p>
                            <p className='text-lg'>Where to grow business as a photographer: site or social media?</p>
                            <button className='bg-primary w-22 h-10 text-white font-medium rounded-sm'>Register</button>
                        </div>
                        <div className='w-4/6 ml-34'>
                            <Image src={Heropng} alt='Illustration' className='w-full' />
                        </div>
                    </div>
                </section>
            </div>
            {/* <div className='h-screen'>
            </div> */}
        </>
    );
};