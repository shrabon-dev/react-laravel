import React, { useEffect, useState } from 'react'
import MovieCard from '../movieCard'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import antime from '../../../assets/movie/sl.webp'
import tiger from '../../../assets/movie/tiger.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide,useSwiper  } from 'swiper/react';
import Title from '../../title';
import Api from '../../../api';

export default function Movies() {
    const [releaseCurs, setReleaseCurs] = useState(null);
    const [genresCurs, setGenresCurs] = useState(null);
    const [trendCurs, setTrendCurs] = useState(null);
    const [hviewsCurs, setHviewsCurs] = useState(null);
    const [releaseShowCurs, setReleaseShowCurs] = useState(null);
    const [genresShowCurs, setGenresShowCurs] = useState(null);
    const [trendShowCurs, setTrendShowCurs] = useState(null);
    const [hviewsShowCurs, setHviewsShowCurs] = useState(null);
    const [data, setData] = useState(null);

    // http://localhost:8000/api/movies/show
    useEffect(()=>{
        Api.get('/movies/show')
        .then((response)=>{
            setData(response.data.value)
        })
    },[])

    // console.log(data )

  return (
    <>
        <section>
            <div className="container-fluid">
                <div className="border-[1px] rounded-xl border-[#262626] my-10 p-6 md:p-14 relative mt-20">
                    <div className="movie-title text-white text-sm md:text-lg font-manrope font-medium rounded-md bg-btn py-2 md:py-3 px-3 md:px-6 absolute -top-6 left-10">Movies</div>
                    <div className="new_release_movie">
                        {/* Movie Card  */}
                        <Title movieTitle={true} title={'New Release'} swiperInstance={releaseCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setReleaseCurs}
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
                        
                        {data && data.map((item,index)=>
                            <SwiperSlide>
                               
                                <MovieCard movie={true} value={item}/>
                            </SwiperSlide>
                        )}
                
                        </Swiper> 
                        </div>
                    </div>
                    <div className="our_genres pt-20">
                        {/*  Popular Genres */}
                        <Title movieTitle={true} title={'Our Genres'} swiperInstance={genresCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setGenresCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                    <div className="trending_movie pt-20">
                        {/* Trending now  */}
                        <Title movieTitle={true} title={'Trending Now'} swiperInstance={trendCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setTrendCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                    <div className="highest_views pt-20">
                        {/* Heigst Views  */}
                        <Title movieTitle={true} title={'Highest Views in this week'} swiperInstance={hviewsCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setHviewsCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                </div>
                <div className="border-[1px] rounded-xl border-[#262626] my-10 p-6 md:p-14 relative mt-20">
                    <div className="movie-title text-white text-sm md:text-lg font-manrope font-medium rounded-md bg-btn py-2 md:py-3 px-3 md:px-6 absolute -top-6 left-10">Shows</div>
                    <div className="new_release_movie">
                        {/* Movie Card  */}
                        <Title movieTitle={true} title={'New Release'} swiperInstance={releaseShowCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setReleaseShowCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper> 
                        </div>
                    </div>
                    <div className="our_genres pt-20">
                        {/*  Popular Genres */}
                        <Title movieTitle={true} title={'Our Genres'} swiperInstance={genresShowCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setGenresShowCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                    <div className="trending_movie pt-20">
                        {/* Trending now  */}
                        <Title movieTitle={true} title={'Trending Now'} swiperInstance={trendShowCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setTrendShowCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                    <div className="highest_views pt-20">
                        {/* Heigst Views  */}
                        <Title movieTitle={true} title={'Highest Views in this week'} swiperInstance={hviewsShowCurs}/>
                        <div className="">
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={4}
                        onSwiper={setHviewsShowCurs}
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
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <MovieCard/>
                        </SwiperSlide>
                        </Swiper>
                        
                        </div>
                    </div>
                </div>
               

            </div>
        </section>
    </>
  )
}
