import React from 'react'
import logo from '../../../assets/logo.png'

export default function SiteLogo() {
  return (
    <div className="logo border-b border-border">
        <picture>
            <img className='w-20' src={logo} alt="logo" />
        </picture>
    </div>
  )
}
