import React from 'react'
import supportImg from '../../assets/support.png'
export default function SupportComp() {
  return (
    <>
        <section className="support py-32 pt-52 lg:py-52">
            <div className="container-fluid">
                <div className="md:flex">
                    <div className="md:w-2/5 md:pr-10 2xl:pr-0">
                        <div className="sprt_left">
                            <h6 className='font-manrope font-bold text-4xl md:text-4xl md:!leading-relaxed lg:text-5xl text-white max-w-[75%] leading-normal'>Welcome to our support page!</h6>
                            <p className='font-manrope font-normal pt-5 text-lg md:text-base lg:text-lg text-second max-w-[75%] leading-normal'>We're here to help you with any problems you may be having with our product.</p>
                            <div className="img_move_card mt-10 border-border border-4 rounded-lg overflow-hidden max-w-lg max-h-[410px]">
                                <img className='w-full block' src={supportImg} alt={supportImg} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="supprt__form bg-dark p-10 border-border border rounded-md">
                            <form action="">
                                <div className="md:flex justify-between items-start">
                                    <div className="md:w-[48%]">
                                        <label className='block text-second font-manrope text-lg pb-2 font-normal' htmlFor="">First Name</label>
                                        <input className='font-normal placeholder:font-normal placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm w-full p-2' type="text" name="" id="" placeholder='Enter First Name'/>
                                    </div>
                                    <div className="md:w-[48%]  pt-5 md:pt-0">
                                        <label className='block text-second font-manrope text-lg pb-2 font-normal' htmlFor="">Last Name</label>
                                        <input className='font-normal placeholder:font-normal placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm w-full p-2' type="text" name="" id="" placeholder='Enter Last Name'/>
                                    </div>
                                </div>
                                <div className="lg:flex pt-5 justify-between items-start">
                                    <div className="lg:w-[48%]">
                                        <label className='block text-second font-manrope text-lg pb-2 font-normal' htmlFor="">Email</label>
                                        <input className='font-normal placeholder:font-normal placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm w-full p-2' type="text" name="" id="" placeholder='Enter Email'/>
                                    </div>
                                    <div className="lg:w-[48%] pt-5 lg:pt-0">
                                        <label className='block text-second font-manrope text-lg pb-2 font-normal' htmlFor="">Phone Number</label>
                                        <div className="flex justify-between gap-2">
                                            <select className='font-normal w-20 placeholder:font-normal placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm py-2 pl-1' name="" id="">
                                                <option value="">+880</option>
                                                <option value="">+880</option>
                                                <option value="">+880</option>
                                                <option value="">+880</option>
                                                <option value="">+880</option>
                                            </select>

                                        <input className='font-normal placeholder:font-normal placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm w-full p-2' type="text" name="" id="" placeholder='Enter Number'/>
                                        </div>
                                    </div>
                                </div>
                                 
                                <div className="md:flex pt-5">
                                    <div className="w-[100%]">
                                        <label className='block text-second font-manrope text-lg pb-2 font-normal' htmlFor="">Message</label>
                                        <textarea className='font-normal placeholder:font-normal resize-none h-24 lg:h-64 placeholder:font-manrope placeholder:text-sm placeholder:capitalize placeholder:text-second placeholder:not-italic text-lg text-second bg-subDark  border-border border rounded-sm w-full p-2' name="" id="" placeholder='Enter Your Message'></textarea>
                                    </div>
                                </div>
                                <div className="flex pt-10 justify-between items-center">
                                    <div className="w-[75%] lg:w-[70%] flex items-center gap-5">
                                        <input type="checkbox" name="" id="term"/>
                                        <label className='block pb-0 text-second font-manrope text-xs lg:text-lg pr-5 lg:pr-0 font-normal' htmlFor="term">I agree with Terms of Use and Privacy Policy</label>
                                    </div>
                                    <div className="w-[28%]">
                                      <button className='w-full font-manrope text-sm lg:text-base text-white !not-italic inline-block bg-btn border-btn mt-0'>Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
