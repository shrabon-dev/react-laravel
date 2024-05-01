import React from 'react'
import { MdOutlineAdd } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineArrowForward } from "react-icons/md";

export default function Feedback() {
  return (
    <>
        <div className='bg-[#1A1A1A] border border-[#262626] rounded-lg p-5 mb-4'>
                <div className="title">
                    <div className="flex justify-between items-center">
                        <p className='font-manrope font-medium text-lg text-[#999999]'>Reviews</p>
                        <span className='font-manrope font-medium text-lg border-[#262626] border py-2 px-4 rounded-lg bg-[#141414] text-white flex items-center gap-2'><MdOutlineAdd /> Add Your Review</span>
                    </div>
                </div>
                <div className="feedback flex gap-5 justify-between pt-5">
                    <div className="w-1/2">
                        <div className="box border-[#262626] border p-5 rounded-lg bg-[#141414]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className='font-manrope font-medium text-lg text-[#999999]'>Julfia</p>
                                    <p className='font-manrope font-medium text-sm text-[#999999]'>From Nigeria</p>
                                </div>
                                <span className='font-manrope font-medium text-sm border-[#262626] border py-2 px-4 rounded-full text-[#E50000] bg-[#141414] flex items-center gap-2'><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf /> <span className="text-[#999999] ">4.5</span> </span>
                            </div>
                            <div className="review">
                                <p className='font-manrope font-normal pt-5 text-lg text-[#999999]'>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="box border-[#262626] border p-5 rounded-lg bg-[#141414]">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className='font-manrope font-medium text-lg text-[#999999]'>Julfia</p>
                                    <p className='font-manrope font-medium text-sm text-[#999999]'>From Nigeria</p>
                                </div>
                                <span className='font-manrope font-medium text-sm border-[#262626] border py-2 px-4 rounded-full text-[#E50000] bg-[#141414] flex items-center gap-2'><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf /> <span className="text-[#999999] ">4.5</span> </span>
                            </div>
                            <div className="review">
                                <p className='font-manrope font-normal pt-5 text-lg text-[#999999]'>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon text-center pt-4">
                    <span className='w-10 h-10 mr-10 cursor-pointer hover:bg-[#E5000050] duration-200 ease-linear bg-[#141414] text-white border border-[#262626] rounded-full inline-flex justify-center items-center'><MdArrowBack/></span>
                    <span className='w-10 h-10 bg-[#141414] cursor-pointer hover:bg-[#E5000050] duration-200 ease-linear text-white border border-[#262626] rounded-full inline-flex justify-center items-center'><MdOutlineArrowForward/></span>
                </div>
        </div>
    </>
  )
}
