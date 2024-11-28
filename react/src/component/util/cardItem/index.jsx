import React from 'react'
 

export default function UtilCard({title,info,icon: Icon}) {
  return (
    <>
     <div className='movieCard sm:w-[48%] xl:w-[32%]'>
        <div className="border rounded-xl border-border bg-gradient-to-tr from-dark from-55% to-red-600/15 to-100% p-4">
            <div className="flex gap-3 mb-3">
                <div className="icon bg-body border-border2 border w-14 h-14 rounded-lg  flex justify-center items-center"> < Icon className="text-4xl text-btn"/> </div>
                <h6 className='font-manrope text-white text-2xl font-semibold'> {title}</h6>
            </div>
            <div className="info !flex justify-between items-center">
                <div className="left">
                    <p className='font-manrope font-semibold text-base pt-3 text-second'>{info}</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
