import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../../context/ContextProvider';

export default function HeaderMenus() {
    let {token,setToken,user,setUser,loading,setLoading,notify} = useStateContext();
 
    
  return (
    <header className='headerMenuBar bg-body fixed z-[999] w-[90.5%] mb-10 border-b border-border'>
        <ul>
            <li><Link to={'/'}>Back to Site </Link></li>

        </ul>
        <div className="info">
        Welcome !! <span className='alert'> {user.name}</span>
        </div>
    </header>
  )
}
