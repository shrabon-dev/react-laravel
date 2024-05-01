import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
import Api from '../api';
import Notification from '../component/notification';
import logo from '../assets/light-logo.png'
import { MdArrowRightAlt } from "react-icons/md";

export default function Authlayout() {
   let {token,setToken,user,setUser,loading,setLoading,notify} = useStateContext();
   let location = useLocation();
    // Checking User Authorize or Not
   if(!token){
    return <Navigate to={'/login'} />
   }
   const [isActive, setIsActive] = useState(false);

   const toggleHeight = () => {
     setIsActive(!isActive);
   };
   // Logout Handle
   let handleLogout = (e) => {
    e.preventDefault();

    Api.post('auth/logout', null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then(({ data }) => {
        setUser({});
        setToken(null);
    })
    .catch((error) => {
        console.error('Error fetching user data:', error);
    });
    }

// User Info Show
   useEffect(() => {
    setLoading(true)
    Api.get('user',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(({ data }) => {
        setUser(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false)
      });
  }, []);

  return (

    <div id='authLayout' style={{ background:'white' }}>

        <aside className='asideMenuBar'>
        <div className="logo">
            <picture>
                <img src={logo} alt="logo" />
            </picture>
        </div>
            <ul>
                <li><Link to={'/panel'}>Dashboard</Link></li>
                <li><Link to={'/panel/user'}>User</Link></li>
                <li onClick={toggleHeight} className='group'><Link >Video Managmt</Link>
                <ul className={`group-hover:max-h-52 overflow-hidden max-h-0 duration-700 bg-subBg ${isActive ? 'active' : ''}`}>
                    <li><Link className={` ${location.pathname == '/panel/video/upload' ? 'bg-[#F69428]' : ''} !pl-10 block`} to={'/panel/video/upload'} > <MdArrowRightAlt className='inline-block' /> Upload</Link></li>
                    <li><Link className={` ${location.pathname == '/panel/video/list' ? 'bg-[#F69428]' : ''} !pl-10 block`} to={'/panel/video/list'}> <MdArrowRightAlt className='inline-block' /> List</Link></li>
                    <li><a className='!pl-10 block' href="#"> <MdArrowRightAlt className='inline-block' /> Report</a></li>
                </ul>
                </li>
                <li><Link onClick={handleLogout}>Log out </Link></li>
            </ul>
        </aside>
        <div id='content'>
            <header className='headerMenuBar fixed z-[9999] w-[91%] mb-10'>
                <ul>
                    <li><Link to={'/panel'}>Dashboard</Link></li>

                </ul>
                <div className="info">
                Welcome !! <span className='alert'> {user.name}</span>
                </div>
            </header>
            {/* main content box start*/}
            <div className="content_box !py-20">
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

