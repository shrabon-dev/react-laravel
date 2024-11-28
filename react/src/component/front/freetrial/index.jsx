import React from 'react'
import bg from '../../../assets/bg.png'


export default function FreeTrial() {
  return (
    <>
     <section className='py-20'>
        <div className="container-fluid">
            <div className="bg w-full ">
            <div className="lg:flex justify-between items-center w-full rounded-lg p-6 md:p-20 border border-[#262626]" style={{ background:`url(${bg}) no-repeat center`,backgroundSize:'cover', }}>
                <div className="">
                    <h6 className='font-manrope font-bold text-5xl text-[#ffffff]'>Start your free trial today!</h6>
                    <p className='font-manrope font-normal text-lg pt-4 text-[#999999]'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <a className='bg-[#E50000] py-2 px-4 mt-5 lg:mt-0 block sm:inline-block text-center lg:min-w-[180px] font-manrope font-normal text-lg rounded-lg' href="#"> Start a Free Trial </a>
            </div>
            </div>
        </div>
     </section>
    </>
  )
}
