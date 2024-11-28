import React from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
export default function Title({title,info,button,movieTitle,swiperInstance }) {
  return (
    <>
    {movieTitle ? 
    <div className="title flex justify-between items-center pb-4 md:pb-12">
        <h4 className='font-manrope font-bold text-white text-lg md:text-4xl '>{title}</h4>
        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-1 md:p-3'>
            <span onClick={() => swiperInstance?.slidePrev()} className='bg-body border border-border rounded-xl p-1 md:p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
            <span onClick={() => swiperInstance?.slideNext()} className='bg-body border border-border rounded-xl p-1 md:p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
        </div>
    </div>
    :
                    <div className="title sm:flex justify-between items-center pb-6 md:pb-20">
                        <div className="title_info">
                            <h4 className='font-manrope font-bold text-white text-xl md:text-4xl '>{title}</h4>
                            <p className='font-manrope font-normal text-second text-sm md:text-lg pt-2 '>{info}</p>
                        </div>
                        {button &&
                        <div className='bg-[#0F0F0F] sm:ml-10 mt-5 md:mt-0 border border-border rounded-xl  inline-flex justify-between items-center p-2 md:p-3'>
                            <span onClick={() => swiperInstance?.slidePrev()} className='bg-body border border-border rounded-xl p-2 md:p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span onClick={() => swiperInstance?.slideNext()} className='bg-body border border-border rounded-xl p-2 md:p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                        }
                    </div>
    }
    </>
  )
}
