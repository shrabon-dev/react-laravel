import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/front/footer'
import VideoPlay from '../component/front/videoplay'
import Movies from '../component/front/movies'
import FreeTrial from '../component/front/freetrial'

export default function Movie() {
  return (
    <>
    <Navbar/>
    <VideoPlay/>
    <Movies/>
    <FreeTrial/>
    <Footer/>
    </>
  )
}
