import React, { useState } from 'react'
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
  let [faq,setFaq] = useState()
  return (
    <section className=''>
        <div className="container-fluid">
                <div className="title sm:flex justify-between items-center pb-28 ">
                    <div className="title_info">
                        <h4 className='font-manrope font-bold text-white text-xl lg:text-4xl'>Frequently Asked Questions</h4>
                        <p className='font-manrope font-normal text-second text-base lg:text-lg pt-2'>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    </div>
                    <div className='pt-5 md:pt-0 md:ml-10'>
                        <a className='border-border border text-white min-w-[180px] font-manrope text-lg md:text-xl py-3 text-center lg:px-10 inline-block bg-btn rounded-md' href="#">Ask a question</a>
                    </div>
                </div>
                {/* Movie Card  */}
                <div className="flex flex-wrap gap-5 pb-24 justify-between">
                {faqItems.map((item, index) => (
                <div key={index} className="faqItem md:w-[48%] 2xl:w-[49%]">
                    <div className="border rounded-xl border-border bg-subDark p-5 flex gap-5">
                        <div className="list">
                            <a
                                className="border-border border text-white font-manrope text-sm lg:text-xl py-3 w-6 md:w-10 md:h-10 lg:w-14 h-6 lg:h-14 inline-flex justify-center items-center bg-dark rounded-md"
                                href="#"
                            >
                                {1 + index}
                            </a>
                        </div>
                        <div className="faq-info">
                            <h3 className="font-manrope font-bold text-xl md:text-base lg:text-xl text-white">{item.q}</h3>
                            <p
                                className={`faq ${
                                    index === faq ? 'show' : ''
                                } font-manrope overflow-hidden font-normal text-sm text-justify md:text-left md:text-sm md:leading-relaxed lg:text-lg text-second pt-2`}
                            >
                                {item.a}
                            </p>
                        </div>
                        <div
                            onClick={() => setFaq(index === faq ? null : index)} 
                            className="close_btn cursor-pointer text-white text-xl ml-auto"
                        >
                            {index === faq ? <FaMinus /> : <FaPlus />}
                        </div>
                    </div>
                </div>
            ))}

                </div>
        </div>
    </section>
  )
}

var faqItems = [
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
  {
    q:'Not Sure, Which Home is Best?',
    a:'Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?Not Sure, Which Home is Best?',
  },
]