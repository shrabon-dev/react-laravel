import React from 'react'
import logo from '../../assets/light-logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

export default function Navbar() {
    let logoStyle = {
        width:'100px',
        display:'block'
    }
    let aStyle = {
        fontSize:'20px',
        fontWight:'200',
        padding:'1px 20px',
        textTransform:'uppercase'
    }
  return (
    <>
    <nav className='bg-transparent fixed top-10 w-full z-[99999]'>
        <div className='flex justify-between items-center container'>
            {/* Logo Start */}
            <div className="">
                <picture>
                    <img className='block w-40'  src={logo} alt="vplay logo" />
                </picture>
            </div>
            <ul className='flex gap-10 bg-dark p-4 border-2 border-subDark rounded-lg'>
                <li><a  className='font-manrope font-light text-lg p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Home</a></li>
                <li><a  className='font-manrope font-light text-lg p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Movies & Shows</a></li>
                <li><a  className='font-manrope font-light text-lg p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Support</a></li>
                <li><a  className='font-manrope font-light text-lg p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Subscriptions</a></li>
            </ul>
            {/* Login & Signup */}
            <div className="flex gap-10 items-center">
                <a className='text-2xl hover:text-red-600 duration-300 ease-linear ' href="#"><IoSearchOutline className='inline-block'/></a>
                <a className='text-2xl hover:text-red-600 duration-300 ease-linear ' href="#"><IoIosNotifications className='inline-block'/></a>
            </div>
        </div>
    </nav>
    </>
  )
}
