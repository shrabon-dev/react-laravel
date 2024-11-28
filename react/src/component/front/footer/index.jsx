import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <>
        <footer className='bg-[#0F0F0F] pt-24 pb-24'>
            <div className="container-fluid ">
                <div className="flex flex-wrap justify-between border-b border-[#262626] pb-12">
                    <div className="w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Home</h3>
                        <ul className='space-y-3'>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Categories</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Devices</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Pricing</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Movies</h3>
                        <ul className='space-y-3'>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Gernes</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Trending</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">New Release</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Popular</a></li>
                        </ul>
                    </div>
                    <div className="mt-6 lg:mt-0 w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Shows</h3>
                        <ul className='space-y-3'>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Gernes</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Trending</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">New Release</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Popular</a></li>
                        </ul>
                    </div>
                    <div className=" mt-6 lg:mt-0 w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Support</h3>
                        <ul>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className=" mt-6 lg:mt-0 w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Subscription</h3>
                        <ul className='space-y-3'>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Plans</a></li>
                            <li><a className='font-manrope font-normal text-lg text-[#999999]' href="#">Features</a></li>
                        </ul>
                    </div>
                    <div className="  mt-6 lg:mt-0 w-[48%] lg:w-[19%] xl:w-1/6">
                        <h3 className='font-manrope font-normal text-lg text-white pb-6'>Contact Us</h3>
                         <div className="flex gap-2">
                            <a className='w-10 h-10  bg-[#1A1A1A] border border-[#262626] rounded-lg inline-flex justify-center items-center' href="#"><FaFacebookF/></a>
                            <a className='w-10 h-10 bg-[#1A1A1A] border border-[#262626] rounded-lg inline-flex justify-center items-center' href="#"><FaLinkedinIn/></a>
                            <a className='w-10 h-10  bg-[#1A1A1A] border border-[#262626] rounded-lg inline-flex justify-center items-center' href="#"><BsTwitterX/></a>
                         </div>
                    </div>
                </div>
                 <div className="copyright pt-3">
                    <div className="flex justify-between items-center">
                            <p className='font-manrope font-normal text-base text-[#999999]'>@2023 streamvib, All Rights Reserved</p>
                            <ul className='flex gap-3'>
                                <li><a className='font-manrope font-normal text-base text-[#999999] border-r pr-2 border-[#262626]' href="#">Terms of Use</a></li>
                                <li><a className='font-manrope border-r pr-2 border-[#262626] font-normal text-base text-[#999999]' href="#">Privacy Policy</a></li>
                                <li><a className='font-manrope font-normal  text-base text-[#999999]' href="#">Cookie Policy</a></li>
                            </ul>
                    </div>
                 </div>
            </div>
        </footer>
    </>
  )
}
