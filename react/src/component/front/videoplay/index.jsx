import React from 'react'
import poster from '../../../assets/poster.jpg'
import video from '../../../assets/video/movie.mp4'
import { FaPlay } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";



export default function VideoPlay() {
  return (
    <>
        <section className='pt-[118px] '>
            <div className=" container-fluid">
                <div className="w-full relative rounded-lg overflow-hidden h-[835px]">
                    <video  className='w-full object-cover h-full rounded-lg ' id='box-video' poster={poster}>
                        <source src={video} />
                    </video>
                    {/* Video Info Start */}
                    <div className="overlay-video absolute top-0 left-0 w-full h-full bg-gradient-to-b  from-white/0 to-black">
                        <div className="video-info absolute w-full bottom-10">
                            <h3 className='font-manrope font-bold text-xl sm:text-xl md:text-4xl text-white text-center'>Wolf Hunting</h3>
                            <p className='font-manrope font-normal text-sm md:text-lg text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum sapiente voluptatum similique non doloremque praesentium? Quo natus atque veniam.</p>
                            <div className="flex items-center justify-center gap-3 pt-5">
                                <div className="play">
                                    <button  className='flex w-max px-3 md:px-6 not-italic py-2 md:py-3 mt-0 bg-[#E50000] border-[#E50000] items-center gap-2 font-manrope font-semibold text-none text-sm md:text-lg'> <FaPlay/> Play Now</button>
                                </div>
                                <div className="like bg-[#0F0F0F] border border-[#262626] w-9 md:w-[56px] h-9 md:h-[56px] rounded-lg text-white flex justify-center items-center text-sm md:text-2xl"> <AiFillLike/> </div>
                                <div className="like bg-[#0F0F0F] border border-[#262626] w-9 md:w-[56px] h-9 md:h-[56px] rounded-lg text-white flex justify-center items-center text-sm md:text-2xl"> <FaPlus/> </div>
                                {/* <div className="add-fav bg-[#0F0F0F] border border-[#262626] w-[56px] h-[56px] rounded-lg text-white flex justify-center items-center text-2xl"> <FaPlus/> </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
