import React from 'react'

import Navbar from '../component/navbar'
import VideoPlay from '../component/front/videoplay'
import VideoDescription from '../component/front/videoDescription'
import FreeTrial from '../component/front/freetrial'
import Footer from '../component/front/footer'
import { useParams } from 'react-router-dom'

export default function PlayVideo() {
  const { id } = useParams();
  return (
    <>
    <Navbar/>
    <VideoPlay id={id} />
    <VideoDescription/>
    <FreeTrial/>
    <Footer/>
    </>
  )
}
