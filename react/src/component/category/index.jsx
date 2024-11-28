import React, { useState } from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import CategoryUtil from '../util/categoryCard';
import categoryImg from '../../assets/category/cate.png'
import categoryImgTwo from '../../assets/category/cate2.png'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide,useSwiper  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Category() {
    const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
        <section className='pt-96 sm:pt-72 md:pt-96 lg:pt-64'>
            <div className="container-fluid">
              
                    <div className="title sm:flex justify-between items-center pb-6 md:pb-20">
                        <div className="title_info">
                            <h4 className='font-manrope font-bold text-white text-xl md:text-4xl '>Explore our wide variety of categories</h4>
                            <p className='font-manrope font-normal text-second text-sm md:text-lg pt-2 '>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                        </div>
                        <div className='bg-[#0F0F0F] sm:ml-10 mt-5 md:mt-0 border border-border rounded-xl  inline-flex justify-between items-center p-2 md:p-3'>
                            <span onClick={() => swiperInstance?.slidePrev()} className='bg-body border border-border rounded-xl p-2 md:p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span onClick={() => swiperInstance?.slideNext()} className='bg-body border border-border rounded-xl p-2 md:p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="pb-24">
                    <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onSwiper={setSwiperInstance}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1424: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}
                    >
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </SwiperSlide>
 
                
                    </Swiper>
                      
                    </div>

            </div>
        </section>

    </>
  )
}
