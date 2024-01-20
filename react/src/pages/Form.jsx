import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom'
import Api from '../api'
import { useStateContext } from '../context/ContextProvider'

export default function Form(props) {
    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null);
    let confirmPassword = useRef(null);
    let {key,id} = useParams();
    let [user,setUser] = useState(null);
    let {setNotify} = useStateContext();
    let navigate = useNavigate();
    const handleNameChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
    };
    const handleEmailChange = (e) => {
        setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
    };
// Add New User Function
    let handleAddUser = (e) => {
        e.preventDefault();
        let data = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        };

        Api.post('auth/users',data)
        .then(({data}) => {
            // setToken(data.token)
            // setUser(data.data)
            setNotify(data.message)
            setTimeout(()=>{
                setNotify('')
            },2000)
            navigate('/user')

        })
        .catch((error) => {
            // setError(error.response.data.errors);
            console.log(error)
        });
    }

// User Showing Function
    if(id){
    useEffect(()=>{
            Api.get('auth/users/'+id)
            .then((response)=>{
                const {data} = response
                setUser(data[0])
            })
        },[])
    }
// Update User Informations Function
    let handleUpdateUser = (e,id) => {
        e.preventDefault();

        Api.put('auth/users/'+id,user)
        .then(({data}) => {
            console.log(data.message);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  return (
    <>
        <div className="d_flex justify_space_between align_item_center">

            {id ?
             <p className='p'><span className="clr_main_bold">User : </span>{user && user.name}</p>
            :
            <p className='p'>Add User</p>
            }
        </div>
        {!id ?
        <div className="w_50 center table card m_t_30 bg_gray shadow">
                <form>
                    <div className="">
                        <input ref={name}  type="text" className='input_control text_black border_none bg_white' placeholder='name...' />
                    </div>
                    <div className="">
                        <input ref={email}  type="text" className='input_control text_black border_none bg_white' placeholder='email...' />
                    </div>
                    <div className="">
                        <input ref={password}  type="password" className='input_control text_black border_none bg_white' placeholder='password...' />
                    </div>
                    {/* <div className="">
                        <input ref={confirmPassword}  type="password" className='input_control text_black border_none bg_white' placeholder='confirmed...' />
                    </div> */}
                    <div className='btn'>
                        <button onClick={handleAddUser}>Add User</button>
                    </div>
                </form>
        </div>
        :
        <div className="w_50 center table card m_t_30 bg_gray shadow">
                <form>
                    <div className="">
                        <label htmlFor="">Name</label>
                        <input ref={name}  type="text" className='input_control text_black border_none bg_white' onChange={handleNameChange} value={user && user.name} placeholder='name...' />
                    </div>
                    <div className="">
                        <label htmlFor="">Email</label>
                        <input ref={email}  type="text" className='input_control text_black border_none bg_white' onChange={handleEmailChange} value={user && user.email} placeholder='email...' />
                    </div>
                    <div className="">
                        <label htmlFor="">Password</label>
                        <input ref={password}  type="password" className='input_control text_black border_none bg_white' placeholder='password...' />
                    </div>
                    <div className='btn'>
                        <button onClick={(e) => user && handleUpdateUser(e,user.id)}>Update User</button>
                    </div>
                </form>
        </div>
        }
    </>
  )
}

