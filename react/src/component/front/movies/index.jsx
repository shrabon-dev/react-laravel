import React from 'react'
import MovieCard from '../movieCard'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import antime from '../../../assets/movie/sl.webp'
import tiger from '../../../assets/movie/tiger.jpg'

export default function Movies() {
  return (
    <>
        <section>
            <div className="container-fluid">
                <div className="border-[1px] rounded-xl border-[#262626] my-10 p-14 relative mt-20">
                    <div className="movie-title text-white font-manrope font-medium rounded-md bg-btn py-3 px-6 absolute -top-6 left-10">Movies</div>

                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Our Genres </h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="flex gap-7 pb-24">
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>

                    {/*  Popular Genres */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Popular Top 10 In Genres</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>

                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Trending Now</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true' img={tiger}/>
                    </div>

                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>New Releases</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                    </div>


                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Must - Watch Movies</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true' img={tiger}/>
                    </div>
                </div>
                <div className="border-[1px] rounded-xl border-[#262626] my-10 p-14 relative mt-20">
                    <div className="movie-title text-white font-manrope font-medium rounded-md bg-btn py-3 px-6 absolute -top-6 left-10">Shows</div>

                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Our Genres </h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer  hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer   hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="flex gap-7 pb-24">
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>

                    {/*  Popular Genres */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Popular Top 10 In Genres</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true'  img={antime}/>
                        <MovieCard movie='true' img={tiger}/>
                        <MovieCard movie='true' img={tiger}/>
                    </div>

                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl'>Trending Now</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                    </div>
                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>New Releases</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                    </div>
                    {/* Trending now  */}
                    <div className="title flex justify-between items-center pb-12">
                        <h4 className='font-manrope font-bold text-white text-4xl '>Must - Watch Movies</h4>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="flex gap-7 pb-24">
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                        <MovieCard movie='true'/>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
