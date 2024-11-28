import React from 'react'
import logo from '../../assets/light-logo.png'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';

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
    <nav className='bg-transparent fixed hidden sm:block top-0 py-4 border-b border-transparent w-full z-[99999]'>
        <div className="container-fluid">
        <div className='flex justify-between items-center '>
            {/* Logo Start */}
            <div className="">
                <picture>
                    <img className='block w-40'  src={logo} alt="vplay logo" />
                </picture>
            </div>
            <ul className='flex lg:gap-10 bg-dark p-4 py-6 border-2 border-subDark rounded-lg'>
                <li><NavLink to={'/'}  className='font-manrope font-light md:text-sm lg:text-lg p-2 lg:p-1 xl:p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Home</NavLink></li>
                <li><NavLink to={'/movie'}  className='font-manrope font-light md:text-sm lg:text-lg p-2 lg:p-1 xl:p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Movies & Shows</NavLink></li>
                <li><NavLink to={'/support'}  className='font-manrope font-light md:text-sm lg:text-lg p-2 lg:p-1 xl:p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Support</NavLink></li>
                <li><NavLink to={'/subscription'}  className='font-manrope font-light md:text-sm lg:text-lg p-2 lg:p-1 xl:p-4 py-[12px] hover:bg-subDark rounded-lg duration-300 ease-linear' href="#">Subscriptions</NavLink></li>
            </ul>
            {/* Login & Signup */}
            <div className="flex gap-10 items-center">
                <a className='text-2xl hover:text-red-600 duration-300 ease-linear ' href="#"><IoSearchOutline className='inline-block'/></a>
                <a className='text-2xl hover:text-red-600 duration-300 ease-linear ' href="#"><IoIosNotifications className='inline-block'/></a>
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}
