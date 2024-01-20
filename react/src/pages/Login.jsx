import React from 'react'
import LoginForm from '../component/login'
import bg from '../assets/signup_bg.jpg'

export default function Login() {
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
        <LoginForm/>
    </div>
  )
}

