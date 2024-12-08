import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Api from '../api';
import Notification from '../component/notification';
import SiteLogo from '../pages/backend/util/logo';
import Menus from '../pages/backend/util/Menus';
import HeaderMenus from '../pages/backend/util/HeaderMenus';

export default function Authlayout() {
   let {token,setToken,user,setUser,loading,setLoading,notify} = useStateContext();
   let location = useLocation();
    // Checking User Authorize or Not
   if(!token){
    return <Navigate to={'/login'} />
   }
   
 
  return (

    <div id='authLayout' style={{ background:'white' }}>

        <aside className='asideMenuBar border-r border-border bg-body w-52'>
            <SiteLogo/>
            <Menus/>
        </aside>
        <div id='content'>
            <HeaderMenus/>
           
            {/* main content box start*/}
            <div className="content_box bg-subDark min-h-screen !py-20">
                <Outlet/>
            </div>
            {/* main content box end*/}
        </div>
        {loading && (
            <div className="loading" style={{ height:'100dvh' }}>
            <span style={{'--index': 1}}>L</span>
            <span style={{'--index': 2}}>o</span>
            <span style={{'--index': 3}}>a</span>
            <span style={{'--index': 4}}>d</span>
            <span style={{'--index': 5}}>i</span>
            <span style={{'--index': 6}}>n</span>
            <span style={{'--index': 7}}>g</span>
            <span style={{'--index': 8}}>.</span>
            <span style={{'--index': 9}}>.</span>
            <span style={{'--index': 10}}>.</span>
            </div>
        )}
        {notify &&
        <Notification message={notify}/>
        }
    </div>
  )
}

