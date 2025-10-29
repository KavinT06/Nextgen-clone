import React from 'react';
import Image from 'next/image';
import Logo from "./assets/svg/Logo.svg";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heropng from "./assets/svg/Illustration.svg";

export default function Page() {
    return (
        <>
            <div className='h-20 lg:h-18 md:h-16 flex items-center justify-around text-lg'>
                <div className='mr-40 lg:mr-0 lg:ml-10 md:mr-0'>
                    <Image src={Logo} alt='Nextgen' />
                </div>
                <div className='flex gap-5 lg:gap-3 md:gap-1 ml-56 lg:ml-20 md:ml-2'>
                    <div className='flex gap-8 lg:gap-6 font-bold md:font-medium md:text-lg mt-2 md:mr-5'>
                        <h1>Home</h1>
                        <h1>Features</h1>
                        <h1>Community</h1>
                        <h1>Blog</h1>
                        <h1>Pricing</h1>
                    </div>
                    <div className='items-center mt-1 lg:mt-2'>
                        <button className='bg-[#4caf4f] w-44 lg:w-38 md:w-28 h-10 lg:h-8 md:h-12 text-white font-medium rounded-sm flex items-center justify-center gap-1 md:gap-0 md:px-1.5' >Register Now <FontAwesomeIcon icon={faArrowRight} className='w-5 ml-1 md:ml-1.5' /></button>
                    </div>
                </div>
            </div>
            <div className='bg-[#e0e2e4]'>
                <section className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-8 lg:py-25'>
                    <div className='grid grid-cols-2 items-center'>
                        <div className='flex flex-col gap-6 lg:gap-4 md:gap-3 justify-center mt-10 lg:mt-0 lg:ml-5 md:ml-5'>
                            <p className='text-6xl md:text-5xl font-medium'>
                                Lessons and insights <br /> <span className='text-[#4caf4f] leading-snug'>from 8 years</span> 
                            </p>
                            <p className='text-lg'>Where to grow business as a photographer: site or social media?</p>
                            <button className='bg-[#4caf4f] w-22 h-10 text-white font-medium rounded-sm'>Register</button>
                        </div>
                        <div className='w-4/6 ml-34 lg:ml-24 md:ml-22'>
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