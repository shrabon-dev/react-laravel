import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from '../api'
import { useStateContext } from '../context/ContextProvider'
import BreadCrumb from './backend/util/BreadCrumb';

export default function Users() {
    let {loading,setLoading,setNotify} = useStateContext();
    let [users, setUsers] = useState([]);
    let [currentpage,setCurrentPage] = useState(1)
    let [lastPage,setLastPage] = useState(0)
    let id = 0;

// All users show Function
    let userGet = async () => {
        setLoading(true)
        let getData = await Api.get('/auth/users?page='+currentpage)
        setUsers(getData.data.data)
        setLoading(false)
        setLastPage(getData.data.meta.last_page);
    }
    useEffect(()=>{
        userGet();
    },[currentpage])

// Date Filter from Database
    let entryDate = (value) =>{
        let date = new Date(value)
        return date.toDateString();
    }
// Pagination Prev Page Function
    let handlePrevPage = () => {
        if(currentpage >1) setCurrentPage(--currentpage)
    }
// Pagination Next Page Function
    let handleNextPage = () => {
        if(currentpage < lastPage) setCurrentPage(++currentpage)
    }
// User Delete or Remove Function
    let handleDelete = (id) => {
        if(window.confirm('Are you sure!!')){
            Api.delete('auth/users/'+id)
            .then(({data})=>{
                setNotify(data.message)
                setTimeout(()=>{
                    setNotify('')
                },2000)
                userGet();
            })
        }
    }

  return (
    <>
        <BreadCrumb current="User List"/>
        <div className="d_flex justify_space_between align_item_center">
            <p className='text-sm text-second font-manrope font-normal'>All Users</p>
            <p className='font-manrope text-second bg-button-edit/70 hover:bg-button-hover hover:shadow-sm ease-linear duration-300  text-base inline-block px-4 py-2 rounded-full '><Link to={'/user/new-user'}>Add New User</Link></p>
        </div>
        <div className="m_t_30">
            <table cellPadding='0' cellSpacing='0' className='user_table' >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Add Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {users} */}
                    {users.map((item,index)=>
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{entryDate(item.created_at)}</td>
                        <td>
                            <span className='font-manrope text-second bg-button-edit text-sm inline-block px-2 py-1 rounded-full '><Link to={`/user/${item.id}/edit`}>Edit</Link></span>
                            <span className='font-manrope text-second bg-btn text-sm inline-block px-2 py-1 rounded-full ml-1'><Link className='' onClick={()=>handleDelete(item.id)}>Delete</Link></span>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <div className='m_t_30'>
                <span className='font-manrope text-second bg-button-dark hover:bg-button-hover hover:shadow-sm duration-300 text-lg inline-block px-4 py-2 rounded-full '><Link onClick={handlePrevPage}>Prev</Link></span>
                <span className='font-manrope text-second bg-button-dark hover:bg-button-hover hover:shadow-sm duration-300  text-lg ml-2 inline-block px-4 py-2 rounded-full '><Link onClick={handleNextPage}>Next</Link></span>
            </div>
        </div>
    </>
  )
}

