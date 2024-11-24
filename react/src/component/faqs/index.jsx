import React from 'react'
import { FaMobile } from "react-icons/fa6";
import UtilCard from '../util/cardItem/index';
import { FaTablet } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { MdLaptopMac } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BsHeadsetVr } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

export default function Faqs() {
  return (
    <section className=''>
        <div className="container-fluid">
                <div className="title flex justify-between items-center pb-28 pt-36">
                    <div className="title_info">
                        <h4 className='font-manrope font-bold text-white text-4xl'>Frequently Asked Questions</h4>
                        <p className='font-manrope font-normal text-second text-lg pt-2'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    </div>
                    <div className=''>
                        <a className='border-border border text-white font-manrope text-xl py-3 px-10 inline-block bg-btn rounded-md' href="#">Ask a question</a>
                    </div>
                </div>
                {/* Movie Card  */}
                <div className="flex flex-wrap gap-5 pb-24 justify-between">
                  {faqItems.map((item,index) => 
                    <div className='faqItem w-[49%]'>
                          <div className="border rounded-xl border-border bg-subDark p-5 flex gap-5">
                            <div className="list">
                              <a className='border-border border text-white font-manrope text-2xl py-3 w-14 h-14 inline-flex justify-center items-center bg-dark rounded-md' href="#">01</a>
                            </div>
                            <div className="faq-info">
                                <h3 className='font-manrope font-bold text-2xl text-white'>Basic Plan</h3>
                                <p className='font-manrope font-normal text-lg text-second pt-2'>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p> 
                            </div>
                            <div className="close_btn cursor-pointer text-white text-xl">
                              {/* <FaMinus /> */}
                              <FaPlus />
                            </div>
                          </div>
                    </div>
                    
                  )}
             
                
 
                 
                    
                </div>
        </div>
    </section>
  )
}

var faqItems = [
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
  {
    q:'hi sdf ksdjfk sd',
    a:'hi sdf ksdjfk sd',
  },
]