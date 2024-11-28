import React from 'react'
import { FaMobile } from "react-icons/fa6";
import UtilCard from '../util/cardItem/index';
import { FaTablet } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { MdLaptopMac } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BsHeadsetVr } from "react-icons/bs";

export default function Plan() {
  return (
    <section className=''>
        <div className="container-fluid">
                <div className="title md:flex justify-between items-center pb-10 md:pb-20 pt-36">
                    <div className="title_info pb-10 md:pb-0">
                        <h4 className='font-manrope font-bold text-white text-xl md:text-4xl'>Choose the plan that's right for you</h4>
                        <p className='font-manrope font-normal max-w-2xl text-second text-sm md:text-lg pt-2'>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                    </div>
                    <div className='bg-[#0F0F0F] border md:ml-10 border-border rounded-xl inline-flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' >Monthly</span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' > Yearly </span>
                    </div>
                </div>
                {/* Movie Card  */}
                <div className="flex flex-wrap justify-center gap-5 pb-24">
                <div className='planItem md:w-[45%] lg:w-[30%] xl:w-[32%]'>
                      <div className="border rounded-xl border-border bg-subDark p-5">
                         <h3 className='font-manrope font-bold text-2xl text-white'>Basic Plan</h3>
                         <p className='font-manrope font-normal text-lg text-second pt-4 pb-12'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                         <h2 className='font-manrope font-medium text-5xl text-white'>$9.99 <span className='font-manrope font-medium text-2xl text-second'>/Month</span></h2>
                         <div className="btn pt-12 md:flex justify-center">
                          <a className='border-border border text-white font-manrope mb-2 sm:mb-0 text-xs xl:text-xl   py-3 px-3 2xl:px-6 inline-block ml-3 bg-dark rounded-md' href="#">Start Free Trial</a>
                          <a className='border-border border text-white font-manrope text-xs xl:text-xl  py-3 px-3 2xl:px-6 inline-block ml-3 bg-btn rounded-md' href="#">Choose Plan</a>
                         </div>
                      </div>
                </div>
                <div className='planItem md:w-[45%] lg:w-[30%] xl:w-[32%]'>
                      <div className="border rounded-xl border-border bg-subDark p-5">
                         <h3 className='font-manrope font-bold text-2xl text-white'>Standard Plan</h3>
                         <p className='font-manrope font-normal text-lg text-second pt-4 pb-12'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                         <h2 className='font-manrope font-medium text-5xl text-white'>$12.99 <span className='font-manrope font-medium text-2xl text-second'>/Month</span></h2>
                         <div className="btn pt-12 md:flex justify-center">
                          <a className='border-border border text-white font-manrope mb-2 sm:mb-0 text-xs xl:text-xl py-3 px-3 2xl:px-6 inline-block ml-3 bg-dark rounded-md' href="#">Start Free Trial</a>
                          <a className='border-border border text-white font-manrope text-xs xl:text-xl py-3 px-3 2xl:px-6  inline-block ml-3 bg-btn rounded-md' href="#">Choose Plan</a>
                         </div>
                      </div>
                </div>
                <div className='planItem md:w-[45%] lg:w-[30%] xl:w-[32%]'>
                      <div className="border rounded-xl border-border bg-subDark p-5">
                         <h3 className='font-manrope font-bold text-2xl text-white'>Premium Plan</h3>
                         <p className='font-manrope font-normal text-lg text-second pt-4 pb-12'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                         <h2 className='font-manrope font-medium text-5xl text-white'>$14.99 <span className='font-manrope font-medium text-2xl text-second'>/Month</span></h2>
                         <div className="btn pt-12 md:flex justify-center">
                          <a className='border-border border text-white font-manrope mb-2 sm:mb-0 text-xs xl:text-xl py-3 px-3 2xl:px-6 inline-block ml-3 bg-dark rounded-md' href="#">Start Free Trial</a>
                          <a className='border-border border text-white font-manrope text-xs xl:text-xl py-3 px-3 2xl:px-6 inline-block ml-3 bg-btn rounded-md' href="#">Choose Plan</a>
                         </div>
                      </div>
                </div>
                    
                </div>
        </div>
    </section>
  )
}
