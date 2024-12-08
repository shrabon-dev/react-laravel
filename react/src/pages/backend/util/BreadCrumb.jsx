import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumb({current}) {
  return (
    <>
        <h6 className='py-5 mb-5'><Link className='text-btn' href={'/panel'}>Dashboard</Link> <span className='text-gray-400'>/</span> <span className='text-gray-400'>{current}</span></h6>
    </>
  )
}
