import React from 'react'

import Navbar from '../component/navbar'
import VideoPlay from '../component/front/videoplay'
import VideoDescription from '../component/front/videoDescription'
import FreeTrial from '../component/front/freetrial'
import Footer from '../component/front/footer'

export default function PlayVideo() {
  return (
    <>
    <Navbar/>
    <VideoPlay/>
    <VideoDescription/>
    <FreeTrial/>
    <Footer/>
    </>
  )
}
