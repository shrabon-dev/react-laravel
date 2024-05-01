import React from 'react'
import DescPart from '../desc'
import Cast from '../cast'
import Feedback from '../feedback'
import { MdOutlineDateRange } from "react-icons/md";
import { IoLanguageOutline } from "react-icons/io5";
import direct from '../../../assets/cast/Image (2).png'
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";

export default function VideoDescription() {
  return (
    <>
     <section>
        <div className="container-fluid mt-14">
            <div className="flex gap-4">
                <div className="w-2/3">
                    <DescPart/>
                    <Cast/>
                    <Feedback/>
                </div>
                <div className="w-1/3">
                <div className='bg-[#1A1A1A] border border-[#262626] rounded-lg p-5 mb-4'>
                <div className="title">
                        <p className='font-manrope font-medium text-lg text-[#999999] flex gap-2 items-center'><MdOutlineDateRange/> Released Date</p>
                        <p className='font-manrope font-medium text-lg text-[#ffffff]'>2024</p>
                </div>
                <p className='font-manrope font-medium text-lg  pt-5 text-[#999999] flex gap-2 items-center'><IoLanguageOutline/> Available Language</p>
                <div className=" flex gap-2 pt-2">
                        <div className="box border-[#262626] border p-2 rounded-lg bg-[#141414]">
                            <p className='font-manrope font-medium text-lg text-[#999999]'>Bangla</p>
                        </div>
                        <div className="box border-[#262626] border p-2 rounded-lg bg-[#141414]">
                            <p className='font-manrope font-medium text-lg text-[#999999]'>Tamil</p>
                        </div>
                        <div className="box border-[#262626] border p-2 rounded-lg bg-[#141414]">
                            <p className='font-manrope font-medium text-lg text-[#999999]'>English</p>
                        </div>
                        <div className="box border-[#262626] border p-2 rounded-lg bg-[#141414]">
                            <p className='font-manrope font-medium text-lg text-[#999999]'>Caina</p>
                        </div>

                </div>
                <p className='font-manrope font-medium text-lg  pt-5 pb-2 text-[#999999] flex gap-2 items-center'><CiStar/> Ratting</p>
                <div className="box flex items-center gap-2 ">
                    <span className='border-[#262626] border p-2 rounded-lg bg-[#141414]'>
                        <p className='font-manrope font-medium text-lg text-[#ffffff]'>IMDb</p>
                        <span className='font-manrope font-medium text-sm text-[#E50000]  flex items-center gap-2'><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf /> <span className="text-[#999999] ">4.5</span> </span>
                    </span>
                    <span className='border-[#262626] border p-2 rounded-lg bg-[#141414]'>
                        <p className='font-manrope font-medium text-lg text-[#ffffff]'>Streamvibe</p>
                        <span className='font-manrope font-medium text-sm text-[#E50000] flex items-center gap-2'><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf /> <span className="text-[#999999] ">4.5</span> </span>
                    </span>
                </div>

                <p className='font-manrope font-medium text-lg  pt-5 pb-2 text-[#999999] '>Director</p>
                <div className="box flex items-center gap-2 border-[#262626] border p-2 rounded-lg bg-[#141414]">
                    <span>
                        <img className='w-14 h-14' src={direct} alt={direct} />
                    </span>
                    <span>
                    <p className='font-manrope font-medium text-lg text-[#999999]'>Julfia</p>
                    <p className='font-manrope font-medium text-sm text-[#999999]'>From Chaina</p>
                    </span>
                </div>
                <p className='font-manrope font-medium text-lg  pt-5 pb-2 text-[#999999]'>Music</p>
                <div className="box flex items-center gap-2 border-[#262626] border p-2 rounded-lg bg-[#141414]">
                    <span>
                        <img className='w-14 h-14' src={direct} alt={direct} />
                    </span>
                    <span>
                    <p className='font-manrope font-medium text-lg text-[#999999]'>Julfia</p>
                    <p className='font-manrope font-medium text-sm text-[#999999]'>From Chaina</p>
                    </span>
                </div>
                </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}
