import React from 'react'
import psOne from '../assets/poster/im1.png'
import psTwo from '../assets/poster/im2.jpg'
import logo from '../assets/light-logo.png'

export default function Video() {
  return (
    <>
        <div className='video w-[18%] border rounded-lg h-62' >
           <a href="#">
             {/* Video Poster or Image */}
             <div className='h-44'>
                {/* <video poster='' src="" style={{ width:'100%' }}>
                    <source media="(min-width: )" srcset="" />
                </video> */}
                <picture>
                    <img style={{ width:'100%',display:'block',height:'100%' }} src={psOne} alt={psOne} />
                </picture>
            </div>
            {/* Video Details*/}
            <div className='flex justify-start gap-2 items-center p-4'>
                {/* Movie Title */}
                <div className='w-10 h-10 border rounded-full bg-main'><picture><img src={logo} className='block w-full h-full object-contain' alt="" /></picture></div>
                <h2 className='text-black font-medium text-base font-poppins' >The Dark Night</h2>
            </div>
            <div className='flex justify-between items-center p-4'>
                {/* Movie Title */}
                <p className='text-gray-700 text-xs font-medium font-interTight '>4.2k Views</p>
                <p className='text-gray-700 text-xs font-medium font-interTight '>3k Share</p>
                <p className='text-gray-700 text-xs font-medium font-interTight '>1y ago</p>
            </div>

           </a>
        </div>
    </>
  )
}
