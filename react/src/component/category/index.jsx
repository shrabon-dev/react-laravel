import React from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import CategoryUtil from '../util/categoryCard';
import categoryImg from '../../assets/category/cate.png'
import categoryImgTwo from '../../assets/category/cate2.png'
export default function Category() {
  return (
    <>
        <section className='pt-64'>
            <div className="container-fluid">
              
                    <div className="title flex justify-between items-center pb-12">
                        <div className="title_info">
                            <h4 className='font-manrope font-bold text-white text-4xl '>Explore our wide variety of categories</h4>
                            <p className='font-manrope font-normal text-second text-lg pt-2 '>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                        </div>
                        <div className='bg-[#0F0F0F] border border-border rounded-xl  flex justify-between items-center p-3'>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block mr-3 text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallLeft/></span>
                            <span className='bg-body border border-border rounded-xl p-3 inline-block text-white  cursor-pointer hover:bg-btn duration-200' ><HiArrowSmallRight/></span>
                        </div>
                    </div>
                    {/* Movie Card  */}
                    <div className="flex gap-7 pb-24">
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                        <CategoryUtil link={'#'} name="Drama" img={categoryImgTwo} />
                        <CategoryUtil link={'#'} name="Drama" img={categoryImg} />
                    </div>

            </div>
        </section>
    </>
  )
}
