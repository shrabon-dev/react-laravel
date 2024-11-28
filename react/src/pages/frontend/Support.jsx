import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/front/footer'
import FreeTrial from '../../component/front/freetrial'
import Faqs from '../../component/faqs'
import SupportComp from '../../component/support'

export default function Support() {
  return (
    <>
        <Navbar/>
        <SupportComp/>
        <Faqs/>
        <FreeTrial/>
        <Footer/>
    </>
  )
}
