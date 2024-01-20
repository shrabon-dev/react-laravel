import React, { useRef, useState } from 'react';
import './index.css';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../assets/dark_logo.png';
import axios from 'axios';
import Api from '../../api';
import { useStateContext } from '../../context/ContextProvider';

export default function SignUpForm() {

    let {token} = useStateContext();

    // Checking User Authorize or Not
   if(token){
    return <Navigate to={'/dashboard'} />
   }


    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null);
    let confirmPassword = useRef(null);
    let [error,setError] = useState([]);
    let {setToken,setUser} = useStateContext();

    let handleSignUp = (e) => {
        e.preventDefault();

        let data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            password_confirmation: confirmPassword.current.value,
        };

        Api.post('auth/signup',data)
        .then(({data}) => {
            setToken(data.token)
            setUser(data.data)
        })
        .catch((error) => {
            setError(error.response.data.errors);
        });
    }

    return (
        <>
            <div className="form">
                <div className="logo">
                    <picture>
                        <img src={logo} alt={logo} loading='lazy'/>
                    </picture>
                </div>
                <form>
                    <div className="">
                        <input ref={name} onChange={e => setError([])} type="text" className='input_control' placeholder='name...' />
                    </div>
                    <div className="">
                        <input ref={email} onChange={e => setError([])} type="text" className='input_control' placeholder='email...' />
                    </div>
                    <div className="">
                        <input ref={password} onChange={e => setError([])} type="password" className='input_control' placeholder='password...' />
                    </div>
                    <div className="">
                        <input ref={confirmPassword} onChange={e => setError([])} type="password" className='input_control' placeholder='confirmed...' />
                    </div>
                    <div className='btn'>
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>

                    <p className='note'>If you have already an account, then <Link to={'/login'}>login</Link> !!</p>
                </form>
                {Object.keys(error).map(item =>
                    <div className="error" key={item}>
                        <span>{item} : </span> {error[item]}
                    </div>
                )}
            </div>
        </>
    )
}
