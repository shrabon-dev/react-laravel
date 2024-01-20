import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';

export default function Guestlayout() {
//    let {token} = useStateContext();
//     if(token){
//         return <Navigate to={'/user'} />
//     }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

