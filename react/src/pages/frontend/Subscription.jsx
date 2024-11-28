import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/front/footer'
import Plan from '../../component/plan'
import Compare from '../../component/compare'
import FreeTrial from '../../component/front/freetrial'

export default function Subscription() {
  return (
    <>
        <Navbar/>
        <div className="pt-20">
            <Plan/>
        </div>
        <Compare/>
        <FreeTrial/>
        <Footer/>
    </>
  )
}
