import React from 'react'
import { MdArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

import image from '../../../assets/cast/image.png'

export default function Cast() {
  return (
    <>
        <div className='bg-[#1A1A1A] border border-[#262626] rounded-lg p-5 mb-4'>
            <div className="icon text-right pb-4">
                <span className='w-10 h-10 mr-2 bg-[#141414] cursor-pointer hover:bg-[#E5000050] duration-200 ease-linear text-white border border-[#262626] rounded-full inline-flex justify-center items-center'><MdArrowBack/></span>
                <span className='w-10 h-10 bg-[#141414] cursor-pointer hover:bg-[#E5000050] duration-200 ease-linear text-white border border-[#262626] rounded-full inline-flex justify-center items-center'><MdOutlineArrowForward/></span>
            </div>
            <div className="flex gap-2">
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>
               <div className="cast">
                <img className='' src={image}  alt="" />
               </div>


            </div>
        </div>
    </>
  )
}
