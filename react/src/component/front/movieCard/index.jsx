import React from 'react'
import { GoArrowRight } from "react-icons/go";
import card1 from '../../../assets/movie/card1.png'
import { IoTimeSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";

export default function MovieCard(props) {
  return (
    <>
     <div className='movieCard'>
        <div className="border rounded-xl border-border bg-bg p-2 sm:p-4">
            <div className="img w-full  pb-5">
                <img className='w-full lg:h-[180px] 2xl:h-[280px] object-cover  block rounded-xl' src={props.img? props.img : card1} alt={props.img? props.img : card1} />
            </div>
            {props.movie ?
            <div className="info !flex justify-between">
                <div className="left bg-body border border-border rounded-full py-2 px-4">
                    <p className='font-manrope font-medium text-base text-second flex gap-2 items-center'><IoTimeSharp/> 1h 30mn</p>
                </div>
                <div className="right bg-body border border-border rounded-full py-2 px-4">
                    <a href="#" className='font-manrope font-medium text-base  text-second flex gap-2  items-center'><FaEye/> 25.9k</a>
                </div>
            </div>
            :
            <div className="info !flex justify-between items-center">
                <div className="left">
                    <p className='font-manrope font-semibold text-xs md:text-lg text-white'>Action</p>
                </div>
                <div className="right">
                    <a href="#" className=' text-lg'><GoArrowRight/></a>
                </div>
            </div>
            }
        </div>
     </div>
    </>
  )
}
