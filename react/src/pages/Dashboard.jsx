import React from 'react'
import '../index.css'
import BreadCrumb from './backend/util/BreadCrumb'

export default function Dashboard() {
  return (
    <>
      <BreadCrumb/>
        <h1 class="text-blue-600 md:text-green-600 ">
        Dashboard
        </h1>
    </>
  )
}

