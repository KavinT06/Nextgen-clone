import React from 'react';
import Image from 'next/image';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "./assets/svg/sec1/Logo.svg";
import Heropng from "./assets/svg/sec1/Illustration.svg";
import Dot from './assets/svg/sec1/Dot.svg';
import l0 from './assets/svg/sec2/Logo-0.svg';
import l1 from './assets/svg/sec2/Logo-1.svg';
import l2 from './assets/svg/sec2/Logo-2.svg';
import l3 from './assets/svg/sec2/Logo-3.svg';
import l4 from './assets/svg/sec2/Logo-4.svg';
import l5 from './assets/svg/sec2/Logo-5.svg';
import l6 from './assets/svg/sec2/Logo-6.svg';
import sec3 from './assets/svg/sec3/rafiki.svg';
import sec4_l0 from './assets/svg/sec4/Icon-0.svg';
import sec4_l1 from './assets/svg/sec4/Icon-1.svg';
import sec4_l2 from './assets/svg/sec4/Icon-2.svg';
import sec4_l3 from './assets/svg/sec4/Icon-3.svg';
import sec5_1 from './assets/svg/sec5/pana.svg';

export default function Page() {
    return (
        <>
            <div className='h-20 lg:h-18 md:h-16 flex items-center justify-around text-lg'>
                <div className='mr-40 lg:mr-0 lg:ml-10 md:mr-0'>
                    <Image src={Logo} alt='Nextgen' />
                </div>
                <div className='flex gap-5 lg:gap-3 md:gap-1 ml-56 lg:ml-20 md:ml-2'>
                    <div className='flex gap-8 lg:gap-6 font-bold md:font-medium md:text-base lg:text-lg mt-2 md:mr-5'>
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
                <section className='mx-auto max-w-7xl md:pb-14 md:p-6 pt-0 lg:px-10 lg:py-25 xl:py-17'>
                    <div className='md:grid sm:grid-cols-1 md:grid-cols-2 items-center'>
                        <div className='flex flex-col gap-6 lg:gap-4 md:gap-3 justify-center md:mt-10 lg:mt-0 lg:ml-5 md:ml-5'>
                            <p className='text-6xl md:text-5xl font-medium'>
                                Lessons and insights <br /> <span className='text-[#4caf4f] leading-snug'>from 8 years</span>
                            </p>
                            <p className='text-lg'>Where to grow business as a photographer: site or social media?</p>
                            <button className='bg-[#4caf4f] w-22 h-10 text-white font-medium rounded-sm'>Register</button>
                        </div>
                        <div className='w-4/6 ml-34 lg:ml-24 md:ml-22'>
                            <Image src={Heropng} alt='Illustration' className='w-full' />
                        </div>
                        <div className='w-14 lg:ml-145 lg:mt-14 md:ml-80 md:mt-16' >
                            <Image src={Dot} alt='Dot' className='w-full' />
                        </div>
                    </div>
                </section>
            </div>
            {/* ------------- sec -- 2 ------------- */}
            <section className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17 text-[#4d4d4d]'>
                <div>
                    <h1 className='text-4xl text-center my-5 font-bold'>Our Clients</h1>
                    <p className='text-center text-2xl'>we have been working with some Fortune 500+ clients.</p>
                    <div className='flex items-center justify-around gap-5 my-5'>
                        <Image src={l0} alt='l0' />
                        <Image src={l1} alt='l1' />
                        <Image src={l2} alt='l2' />
                        <Image src={l3} alt='l3' />
                        <Image src={l4} alt='l4' />
                        <Image src={l5} alt='l5' />
                        <Image src={l6} alt='l6' />
                    </div>
                    <div className='text-center my-10'>
                        <p className='text-2xl font-medium my-3'>Manage your entire community <br />in a single system</p>
                        <p className='text-lg'>who is Nextcent suitable for?</p>
                    </div>
                    <div className='flex items-center text-center'>
                        <div>
                            <h1 className='font-bold'>Membership Organizaton</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>National Associations</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                        </div>
                        <div>
                            <h1 className='font-bold'>Clubs and Groups</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-20 grid grid-cols-2'>
                <div className='w-fit ml-20'>
                    <Image src={sec3} alt='sec3' className='w-full' />
                </div>
                <div className='mt-10'>
                    <h1 className='text-2xl font-medium my-2'>The unseen of spending three <br />years at Pixelgrade</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda molestiae, odio maiores velit commodi obcaecati a similique quam quisquam odit! Hic error necessitatibus quibusdam rerum sint quo, magni alias.</p>
                    <button className='bg-[#4caf4f] p-3 text-white font-medium rounded my-8'>Learn More</button>
                </div>
            </section>
            <section className='bg-[#f5f7fa]'>
                <div className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-25 text-[#4d4d4d]'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <p className='font-medium text-4xl my-5'>Helping a local <br /> <span className='text-[#4caf4f]'>business reinvent itself </span></p>
                            <p>we reached here with our hard work and dedication</p>
                        </div>
                        <div className='grid grid-cols-2 gap-5   items-center'>
                            <div className='grid grid-cols-2 w-5/6'>
                                <Image src={sec4_l0} alt='l1' className='ml-15' />
                                <div className='flex flex-col items-start'>
                                    <p className='font-bold text-3xl'>2,245,341</p>
                                    <p className='text-base'>Members</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 w-5/6'>
                                <Image src={sec4_l1} alt='l2' className='ml-15' />
                                <div className='flex flex-col items-start'>
                                    <p className='font-bold text-3xl'>46,328</p>
                                    <p className='text-base'>Clubs</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 w-5/6'>
                                <Image src={sec4_l2} alt='l3' className='ml-15' />
                                <div className='flex flex-col items-start'>
                                    <p className='font-bold text-3xl'>828,867</p>
                                    <p className='text-base'>Event Bookings</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 w-5/6'>
                                <Image src={sec4_l3} alt='l4' className='ml-15' />
                                <div className='flex flex-col items-start'>
                                    <p className='font-bold text-3xl'>1,926,436</p>
                                    <p className='text-base'>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='text-[#4d4d4d]'>
                <div className='mx-auto max-w-7xl md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17 text-[#4d4d4d] grid grid-cols-2'>
                    <div className='w-4/6 ml-20'>
                        <Image src={sec5_1} alt='pana' className='w-full' />
                    </div>
                    <div className='my-10 mr-5'>
                        <h1 className='text-4xl mb-4 font-medium'>How to design your site footer like we did</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora rerum tempore voluptatibus perferendis eum reiciendis maiores illum distinctio dignissimos molestiae aut quas est unde, officiis quae reprehenderit asperiores magnam animi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit qui est impedit consequatur excepturi aliquam distinctio, eligendi modi quaerat provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum!</p>
                        <button className='bg-[#4caf4f] p-4 text-white font-medium rounded my-6'>Learn More</button>
                    </div>
                </div>
            </section>
        </>
    );
};