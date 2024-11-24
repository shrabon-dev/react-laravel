import React from 'react'
import Banner from '../component/banner'
import Heading from '../component/heading'
import Videos from '../component/videos'
import Navbar from '../component/navbar'
import Category from '../component/category'
import Card from '../component/card'
import Footer from '../component/front/footer'
import FreeTrial from '../component/front/freetrial'
import Plan from '../component/plan'
import Faqs from '../component/faqs'

export default function Home() {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Category/>
        <Card/>
        <Faqs/>
        <Plan/>
        <FreeTrial/>
        <Footer/>

    </>
  )
}
