import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import { useStateContext } from '../../../context/ContextProvider';
import Api from '../../../api';
export default function Menus() {
    const [isActive, setIsActive] = useState(false);
    const toggleHeight = () => {
        setIsActive(!isActive);
      };
      let {token,setToken,user,setUser,loading,setLoading,notify} = useStateContext();
      let location = useLocation();
       // Checking User Authorize or Not
      if(!token){
       return <Navigate to={'/login'} />
      }
      
   
   
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
    <ul className='pt-10'>
        <li><Link to={'/panel'}>Dashboard</Link></li>
        <li><Link to={'/panel/user'}>User</Link></li>
        <li onClick={toggleHeight} className='group'><Link >Video Managmt</Link>
        <ul className={`group-hover:max-h-52 overflow-hidden max-h-0 duration-700 bg-subDark ${isActive ? 'active' : ''}`}>
            <li><Link className={` ${location.pathname == '/panel/video/upload' ? 'bg-btn' : ''} !pl-10 block`} to={'/panel/video/upload'} > <MdArrowRightAlt className='inline-block' /> Upload</Link></li>
            <li><Link className={` ${location.pathname == '/panel/video/list' ? 'bg-btn' : ''} !pl-10 block`} to={'/panel/video/list'}> <MdArrowRightAlt className='inline-block' /> List</Link></li>
            <li><a className='!pl-10 block' href="#"> <MdArrowRightAlt className='inline-block' /> Report</a></li>
        </ul>
        </li>
        <li><Link onClick={handleLogout}>Log out </Link></li>
    </ul>
  )
}
