import React from 'react'
import { GoArrowRight } from "react-icons/go";
import card1 from '../../../assets/movie/card1.png'
import { IoTimeSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";

export default function CategoryUtil({name,link,img}) {
  return (
    <>
     <div className='movieCard w-1/5'>
        <div className="border rounded-xl border-border bg-bg p-4">
            <div className="img w-full  pb-5">
                <img className='w-full h-[280px] object-cover  block rounded-xl' src={img} alt={img} />
            </div>
            <div className="info !flex justify-between items-center">
                <div className="left">
                    <p className='font-manrope font-semibold text-lg text-white'>{name}</p>
                </div>
                <div className="right">
                    <a href={link} className=' text-lg'><GoArrowRight /></a>
                </div>
            </div>
         
        </div>
     </div>
    </>
  )
}
