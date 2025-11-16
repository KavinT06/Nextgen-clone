import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import sec6_img from './assets/img/img1.png';
import sec6_0 from './assets/svg/sec6/Logo-0.svg';
import sec6_1 from './assets/svg/sec6/Logo-1.svg';
import sec6_2 from './assets/svg/sec6/Logo-2.svg';
import sec6_3 from './assets/svg/sec6/Logo-3.svg';
import sec6_4 from './assets/svg/sec6/Logo-4.svg';
import sec6_5 from './assets/svg/sec6/Logo-5.svg';
import img1 from './assets/img/img2.png';
import img2 from './assets/img/img3.png';
import img3 from './assets/img/img4.png';
import flogo from './assets/svg/footer/Logo.svg';
import s1 from './assets/svg/footer/Social Icons.svg';
import s2 from './assets/svg/footer/Social Icons-1.svg';
import s3 from './assets/svg/footer/Social Icons-2.svg';
import s4 from './assets/svg/footer/Social Icons-3.svg';
import send from './assets/svg/footer/send.svg';
import Navbar from './navbar/page';


export default function Page() {
    return (
        <>
            {/* <div className='h-20 lg:h-18 md:h-16 flex items-center justify-around text-lg flex-wrap'>
                <div className='mr-40 lg:mr-0 lg:ml-10 md:mr-0'>
                    <Link href="/navbar">
                        <Image src={Logo} alt='Nextgen' />
                    </Link>
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
            </div> */}

            <div className='overflow-hidden'>
                <Navbar />
                {/* ------------- sec -- 2 ------------- */}
                <div className='bg-[#e0e2e4]'>
                    <section className='mx-auto max-w-7xl p-6 sm:p-8 md:p-10 pt-20 sm:pt-24 md:pt-16 lg:px-10 lg:py-25 xl:py-17'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center'>
                            <div className='flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4 justify-center md:mt-16 lg:mt-0 lg:ml-5 md:ml-5 order-1 md:order-1'>
                                <p className='text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-medium leading-tight'>
                                    Lessons and insights <br /> <span className='text-[#4caf4f] leading-snug'>from 8 years</span>
                                </p>
                                <p className='text-base sm:text-lg'>Where to grow business as a photographer: site or social media?</p>
                                <button className='bg-[#4caf4f] w-32 sm:w-36 h-10 text-white font-medium rounded-sm hover:bg-[#3d9142] transition-colors'>Register</button>
                            </div>
                            <div className='w-full sm:w-4/5 md:w-4/6 mx-auto md:ml-auto mt-6 sm:mt-8 md:mt-16 lg:mt-10 order-2 md:order-2 relative'>
                                <Image src={Heropng} alt='Illustration' className='w-full' />
                            </div>
                        </div>
                        <div className='absolute ml-28 md:ml-76 lg:ml-110 xl:ml-140 xl:mt-8 md:mt-3 lg:mt-16  w-12 sm:w-14 md:w-14 opacity-50 md:opacity-100'>
                            <Image src={Dot} alt='Dot' className='w-full' />
                        </div>
                    </section>
                </div>
                {/* ------------- sec -- 2 ------------- */}
                <section className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17 text-[#4d4d4d]'>
                    <div>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl text-center my-5 font-bold'>Our Clients</h1>
                        <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl px-4'>we have been working with some Fortune 500+ clients.</p>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-around gap-4 sm:gap-6 md:gap-5 my-8 md:my-5 px-4'>
                            <Image src={l0} alt='l0' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l1} alt='l1' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l2} alt='l2' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l3} alt='l3' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l4} alt='l4' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l5} alt='l5' className='w-10 sm:w-20 md:w-auto mx-auto' />
                            <Image src={l6} alt='l6' className='w-10 sm:w-20 md:w-auto mx-auto' />
                        </div>
                        <div className='text-center my-10 px-4'>
                            <p className='text-xl sm:text-2xl font-medium my-3'>Manage your entire community <br className='hidden sm:block' />in a single system</p>
                            <p className='text-base sm:text-lg'>who is Nextcent suitable for?</p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-4 text-center px-4'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-lg sm:text-xl'>Membership Organizaton</h1>
                                <p className='text-sm sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-lg sm:text-xl'>National Associations</h1>
                                <p className='text-sm sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-bold text-lg sm:text-xl'>Clubs and Groups</h1>
                                <p className='text-sm sm:text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus iste fugit doloribus dolore ipsam nam?</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center'>
                    <div className='w-full sm:w-4/5 md:w-fit mx-auto md:ml-20'>
                        <Image src={sec3} alt='sec3' className='w-full' />
                    </div>
                    <div className='px-4 sm:px-0'>
                        <h1 className='text-xl sm:text-2xl md:text-2xl font-medium my-2'>The unseen of spending three <br className='hidden sm:block' />years at Pixelgrade</h1>
                        <p className='text-sm sm:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda molestiae, odio maiores velit commodi obcaecati a similique quam quisquam odit! Hic error necessitatibus quibusdam rerum sint quo, magni alias.</p>
                        <button className='bg-[#4caf4f] px-6 py-3 text-white font-medium rounded my-6 sm:my-8 hover:bg-[#3d9142] transition-colors'>Learn More</button>
                    </div>
                </section>
                <section className='bg-[#f5f7fa] flex-wrap'>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-25 text-[#4d4d4d] md:pr-12 lg:mr-0'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6'>
                            <div className='text-center md:text-left'>
                                <p className='font-medium text-2xl sm:text-3xl md:text-4xl my-5'>Helping a local <br /> <span className='text-[#4caf4f]'>business reinvent itself </span></p>
                                <p className='text-sm sm:text-base'>we reached here with our hard work and dedication</p>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-5'>
                                <div className='flex items-center gap-4 sm:gap-3 justify-center sm:justify-start'>
                                    <Image src={sec4_l0} alt='l1' className='w-12 sm:w-auto' />
                                    <div className='flex flex-col items-start'>
                                        <p className='font-bold text-2xl sm:text-3xl'>2,245,341</p>
                                        <p className='text-sm sm:text-base'>Members</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-3 justify-center sm:justify-start md:ml-5 lg:ml-0'>
                                    <Image src={sec4_l1} alt='l2' className='w-12 sm:w-auto' />
                                    <div className='flex flex-col items-start'>
                                        <p className='font-bold text-2xl sm:text-3xl'>46,328</p>
                                        <p className='text-sm sm:text-base'>Clubs</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-3 justify-center sm:justify-start'>
                                    <Image src={sec4_l2} alt='l3' className='w-12 sm:w-auto' />
                                    <div className='flex flex-col items-start'>
                                        <p className='font-bold text-2xl sm:text-3xl'>828,867</p>
                                        <p className='text-sm sm:text-base'>Event Bookings</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 sm:gap-3 justify-center sm:justify-start'>
                                    <Image src={sec4_l3} alt='l4' className='w-12 sm:w-auto' />
                                    <div className='flex flex-col items-start'>
                                        <p className='font-bold text-2xl sm:text-3xl'>1,926,436</p>
                                        <p className='text-sm sm:text-base'>Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='text-[#4d4d4d]'>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17 text-[#4d4d4d] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center'>
                        <div className='w-full sm:w-4/5 md:w-4/6 mx-auto md:ml-20'>
                            <Image src={sec5_1} alt='pana' className='w-full' />
                        </div>
                        <div className='px-4 sm:px-0 md:mr-5'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl mb-4 font-medium'>How to design your site footer like we did</h1>
                            <p className='text-sm sm:text-base leading-relaxed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora rerum tempore voluptatibus perferendis eum reiciendis maiores illum distinctio dignissimos molestiae aut quas est unde, officiis quae reprehenderit asperiores magnam animi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit qui est impedit consequatur excepturi aliquam distinctio, eligendi modi quaerat provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, laborum!</p>
                            <button className='bg-[#4caf4f] px-6 py-3 sm:p-4 text-white font-medium rounded my-6 hover:bg-[#3d9142] transition-colors'>Learn More</button>
                        </div>
                    </div>
                </section>
                <section className='bg-[#f5f7fa] flex-wrap'>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17 text-[#4d4d4d] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6'>
                        <div className='w-full sm:w-3/4 md:w-5/6 mx-auto md:ml-5'>
                            <Image src={sec6_img} alt='tesla' className='w-full rounded-lg' />
                        </div>
                        <div className='md:col-span-2 px-4 sm:px-0'>
                            <p className='text-sm sm:text-base leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quidem fugiat laboriosam eaque nam tempora culpa perferendis fugit, alias perspiciatis vitae, voluptatem sequi modi. Maxime possimus sapiente necessitatibus rem expedita obcaecati. Consequatur perspiciatis delectus molestiae iure, deleniti laboriosam accusantium fuga qui fugiat et nesciunt minima. Rerum veritatis neque nesciunt nemo nobis qui illo, numquam nisi, saepe doloremque quos minus facere quae cumque labore quia ea praesentium repellat. Totam unde, odit optio quae eum cupiditate repellat sapiente at explicabo harum sed reprehenderit minus, quis perferendis accusantium odio a soluta laborum laudantium. Minima pariatur vel possimus explicabo rerum tenetur libero repellendus magni.
                            </p>
                            <p className='text-[#4caf4f] font-medium text-lg sm:text-xl mt-5 mb-2'>Tim Smith</p>
                            <p className='mb-6 sm:mb-8 text-sm sm:text-base'>British Dragon Boat Racing Association</p>
                            <div className='flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center'>
                                <Image src={sec6_0} alt='svg1' className='w-8 sm:w-auto' />
                                <Image src={sec6_1} alt='svg2' className='w-8 sm:w-auto' />
                                <Image src={sec6_2} alt='svg3' className='w-8 sm:w-auto' />
                                <Image src={sec6_3} alt='svg4' className='w-8 sm:w-auto' />
                                <Image src={sec6_4} alt='svg5' className='w-8 sm:w-auto' />
                                <Image src={sec6_5} alt='svg6' className='w-8 sm:w-auto' />
                                <p className='flex items-center text-[#4caf4f] font-semibold text-base sm:text-lg md:text-xl cursor-pointer hover:underline'>Meet all customers <FontAwesomeIcon icon={faArrowRight} className='w-4 sm:w-5 ml-1 mt-1 md:ml-1.5' /> </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-24'>
                        <h1 className='text-2xl sm:text-3xl text-center px-4'>Caring is the new marketing</h1>
                        <p className='text-center my-5 text-sm sm:text-base px-4 sm:px-8 md:px-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium quae culpa similique dolores voluptate commodi quos, cumque impedit harum cum sint sunt? Doloremque non mollitia deserunt odit, cum accusantium sed aut harum iure, pariatur quos esse nostrum perferendis dicta cumque? Fuga quae esse harum nam quasi animi minus natus?</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 text-[#4d4d4d] mt-12 sm:mt-16'>
                            <div className='relative mb-20 sm:mb-16'>
                                <div>
                                    <Image src={img1} alt='img1' className='w-full rounded-lg' />
                                </div>
                                <div className='bg-[#f5f7fa] w-11/12 sm:w-5/6 md:w-80 h-auto sm:h-40 absolute left-1/2 -bottom-16 sm:-bottom-12 -translate-x-1/2 rounded-xl px-6 sm:px-10 py-4 sm:pt-2 shadow-lg'>
                                    <p className='text-center text-base sm:text-lg font-semibold'>Creating Streamlined Safeguard Processes With OneRen</p>
                                    <p className='flex items-center justify-center my-3 sm:my-5 text-[#4caf4f] font-semibold text-lg sm:text-xl cursor-pointer hover:underline'>ReadMore <FontAwesomeIcon icon={faArrowRight} className='w-4 sm:w-5 ml-1 mt-1 md:ml-1.5' /> </p>
                                </div>
                            </div>
                            <div className='relative mb-20 sm:mb-16'>
                                <div>
                                    <Image src={img2} alt='img2' className='w-full rounded-lg' />
                                </div>
                                <div className='bg-[#f5f7fa] w-11/12 sm:w-5/6 md:w-80 h-auto sm:h-40 absolute left-1/2 -bottom-16 sm:-bottom-12 -translate-x-1/2 rounded-xl px-6 sm:px-10 py-4 sm:pt-2 shadow-lg'>
                                    <p className='text-center text-base sm:text-lg font-semibold'>What are your safeguarding responsibilities and how can you manage them?</p>
                                    <p className='flex items-center justify-center my-3 sm:my-5 text-[#4caf4f] font-semibold text-lg sm:text-xl cursor-pointer hover:underline'>ReadMore <FontAwesomeIcon icon={faArrowRight} className='w-4 sm:w-5 ml-1 mt-1 md:ml-1.5' /> </p>
                                </div>
                            </div>
                            <div className='relative mb-20 sm:mb-16'>
                                <div>
                                    <Image src={img3} alt='img3' className='w-full rounded-lg' />
                                </div>
                                <div className='bg-[#f5f7fa] w-11/12 sm:w-5/6 md:w-80 h-auto sm:h-40 absolute left-1/2 -bottom-16 sm:-bottom-12 -translate-x-1/2 rounded-xl px-6 sm:px-10 py-4 sm:pt-2 shadow-lg'>
                                    <p className='text-center text-base sm:text-lg font-semibold'>Revamping the Membership Model with Triathlon Australia</p>
                                    <p className='flex items-center justify-center my-3 sm:my-5 text-[#4caf4f] font-semibold text-lg sm:text-xl cursor-pointer hover:underline'>ReadMore <FontAwesomeIcon icon={faArrowRight} className='w-4 sm:w-5 ml-1 mt-1 md:ml-1.5' /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-12'>
                        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight font-bold px-4'>pellentesque suscipit <br className='hidden sm:block' /> fringilla libero eu.</p>
                        <div className='flex justify-center my-5'><button className='bg-[#4caf4f] px-6 py-3 sm:p-4 text-white font-medium rounded my-6 flex items-center gap-2 hover:bg-[#3d9142] transition-colors'>Get a Demo <FontAwesomeIcon icon={faArrowRight} className='w-4 sm:w-5' /></button></div>
                    </div>
                </section>
                <section className='bg-[#263238] text-white'>
                    <div className='mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 md:pb-16 md:p-6 pt-0 lg:px-10 lg:py-26 xl:py-17'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-28'>
                            <div className='sm:col-span-2 lg:col-span-1'>
                                <Image src={flogo} alt='Footer logo' className='mb-6' />
                                <div className='my-6 sm:my-10'>
                                    <p className='text-sm sm:text-base'>Copyright © 2020 Nexcent ltd.</p>
                                    <p className='mb-6 sm:mb-8 text-sm sm:text-base'>All rights reserved</p>
                                    <div className='flex gap-4 sm:gap-6'>
                                        <Image src={s1} alt='social Icons' className='w-8 sm:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                                        <Image src={s2} alt='social Icons' className='w-8 sm:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                                        <Image src={s3} alt='social Icons' className='w-8 sm:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                                        <Image src={s4} alt='social Icons' className='w-8 sm:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg sm:text-xl font-bold mb-3 sm:mb-0'>Company</p>
                                <div className='leading-loose my-3 sm:my-5 text-sm sm:text-base'>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>About us</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Blog</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Contact us</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Pricing</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Testimonials</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg sm:text-xl font-bold mb-3 sm:mb-0'>Support</p>
                                <div className='leading-loose my-3 sm:my-5 text-sm sm:text-base'>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Help center</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Terms of service</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Legal</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Privacy policy</p>
                                    <p className='cursor-pointer hover:text-[#4caf4f] transition-colors'>Status</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg sm:text-xl font-bold mb-3'>Stay up to date</p>
                                <div className='relative my-3 sm:my-5'>
                                    <input type="text" placeholder='Your email address' className='bg-[#515b60] w-full px-3 py-2 rounded-md text-sm sm:text-base placeholder:text-sm' />
                                    <Image src={send} alt='send' className='absolute top-1/2 -translate-y-1/2 right-2 w-6 sm:w-auto cursor-pointer hover:opacity-80 transition-opacity' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};