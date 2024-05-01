import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';

export default function Guestlayout() {

  return (
    <div>
        <Outlet/>
    </div>
  )
}

