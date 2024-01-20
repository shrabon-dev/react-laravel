import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../../assets/dark_logo.png'
import Api from '../../api';
import { useStateContext } from '../../context/ContextProvider';

export default function LoginForm() {

    let {token} = useStateContext();

    // Checking User Authorize or Not
   if(token){
    return <Navigate to={'/dashboard'} />
   }

    let email = useRef(null);
    let password = useRef(null);

    let [error,setError] = useState([]);

    let {setToken,setUser} = useStateContext();

    let handleLogin = (e) => {
        e.preventDefault();

        let data = {
            email: email.current.value,
            password: password.current.value,
        };

        Api.post('auth/login',data)
        .then(({data}) => {
            setToken(data.token)
            setUser(data.data)
           return <Navigate to='/dashboard'/>
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
                    <img src={logo} alt={logo} loading='leazy'/>
                </picture>
            </div>
            <form>
                <div className="">
                    <input ref={email} onChange={e => setError([])} type="text" className='input_control' placeholder='email...'/>
                </div>
                <div className="">
                    <input ref={password} onChange={e => setError([])} type="password" className='input_control' placeholder='password...'/>
                </div>

                <div className='btn'>
                    <button onClick={handleLogin}>Login</button>
                </div>

                <p className='note'>If you have no account, then <Link to={'/signup'}>Sign up</Link> !!</p>

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
