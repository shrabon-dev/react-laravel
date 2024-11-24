import React from 'react'
import { FaMobile } from "react-icons/fa6";
import UtilCard from '../util/cardItem/index';
import { FaTablet } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { MdLaptopMac } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BsHeadsetVr } from "react-icons/bs";

export default function Card() {
  return (
    <section className=''>
        <div className="container-fluid">
                <div className="title flex justify-between items-center pb-12">
                    <div className="title_info">
                        <h4 className='font-manrope font-bold text-white text-4xl'>Explore our wide variety of categories</h4>
                        <p className='font-manrope font-normal text-second text-lg pt-2'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                    </div>
                   
                </div>
                {/* Movie Card  */}
                <div className="flex flex-wrap gap-5 pb-24">
                    <UtilCard icon={FaMobile} title="Smartphones" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    <UtilCard icon={FaTablet} title="Tablet" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    <UtilCard icon={IoTvSharp} title="Smart TV" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    <UtilCard icon={MdLaptopMac} title="Laptop" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    <UtilCard icon={SiYoutubegaming} title="Gaming" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    <UtilCard icon={BsHeadsetVr} title="VR Headset" info="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"  /> 
                    
                </div>
        </div>
    </section>
  )
}
