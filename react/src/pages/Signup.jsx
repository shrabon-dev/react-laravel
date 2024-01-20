import React from 'react'
import SignUpForm from '../component/signUp'
import bg from '../assets/signup_bg.jpg'

export default function Signup() {

    const style = {
                backgroundImage:`url(${bg})`,
                width:'100%',
                height:'100vh',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'top',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }

  return (
    <div className='formPage' style={style}>
        <SignUpForm/>
    </div>
  )
}

