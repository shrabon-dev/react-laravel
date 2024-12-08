import React, { useEffect, useState } from 'react'
import Api from '../../api';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
export default function List() {

    let [data,setData] = useState();
    let [modalShow,setModalShow] = useState(null);


    useEffect(()=>{
        Api.get('/video')
        .then((response)=>{
            setData(response.data.data)
        })
    },[data])
    let handleDelete = (id) =>{
        Api.delete('/video/'+id)
        .then((response)=>{

        })
    }
// console.log(data)
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className='bg-main text-white'>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">#SL</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Movie Name</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Thumbnail</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Rating</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Status</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Premium Status</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Views</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Likes</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Unlikes</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Publish Date</th>
                  <th scope="col" className="px-6 py-4  font-manrope font-black text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map(item => (
                    item.id && <React.Fragment  key={item.id}>
                    <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 text-second py-4 font-medium">{item.id}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.movie_name}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold text-center"> <picture><img className='w-20 h-20 block m-auto' src={`http://localhost:8000/storage/uploads/thumbnail/${item.thumbnail}`} alt="" /></picture></td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.rating}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.status}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.premium ? 'Yes, Premium':"It's free"}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.views > 0 ? item.views : 0}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.likes > 0 ? item.likes:0}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.unlikes > 0 ? item.unlikes:0}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">{item.created_at}</td>
                    <td className="whitespace-nowrap px-6 text-second py-4 font-manrope font-bold">
                            <span className='font-manrope font-normal text-sm p-2 rounded-lg bg-blue-600 mr-1'><Link onClick={()=>setModalShow(item.id)} >View</Link></span>
                            <span className='font-manrope font-normal text-sm p-2 rounded-lg bg-green-600 mr-1'><Link to={`/panel/video/update/${item.id}`}>Edit</Link></span>
                            <span className='font-manrope font-normal text-sm p-2 rounded-lg bg-red-600'><Link onClick={()=>handleDelete(item.id)}>Delete</Link></span>
                    </td>
                    </tr>
                    {/* Modal Start */}
                    {modalShow === item.id &&
                    <div key={`modal_${item.id}`} className="modal absolute top-0 left-0 z-[999999] w-full h-full bg-black/50 p-10">
                        <div className="modal_body w-3/5 h-full m-auto bg-white shadow-2xl relative p-10">
                            {/* Closing Button Start */}
                            <div onClick={()=>setModalShow(null)} className="closing_btn cursor-pointer hover:bg-btn hover:text-white duration-300 ease-linear text-btn w-10 h-10 bg-white shadow-2xl flex justify-center items-center shadow-black rounded-full absolute -top-4 -right-4 animate-bounce">
                                <IoMdClose className='inline text-2xl '/>
                            </div>
                            {/* Closing Button End */}
                            {/* Data Show Start */}
                            <div className="flex">
                                <div className="thumbnail w-1/2">
                                    <picture><img className='w-1/2 h-40 block m-auto' src={`http://localhost:8000/storage/uploads/thumbnail/${item.thumbnail}`} alt="" /></picture>
                                </div>
                                <div className="video  w-1/2">
                                    <video id="" controls className='w-full h-44'>
                                    {item.video &&
                                        <>
                                            <source src={`http://localhost:8000/storage/uploads/video/${item.video}`} type='video/mp4'/>
                                            <source src={`http://localhost:8000/storage/uploads/video/${item.video}`} type='video/org'/>
                                        </>
                                    }
                                    </video>
                                    {/* <picture><img className='w-1/2 h-40 block m-auto' src={`http://localhost:8000/storage/uploads/thumbnail/${item.thumbnail}`} alt="" /></picture> */}
                                </div>
                            </div>
                            <div className=" flex pt-10">
                            <div className='w-1/2'>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Movie Title</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.title}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                     <p className='text-lg font-bold font-manrope pb-2'>Movie Name</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.movie_name}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Category</p>
                                </div>
                                <div className="Value">
                                    <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.category}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Release Date</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.release_date}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Studio</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.studio}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Available Language</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.available_langauge}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Rating</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.rating}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Description</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.description}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Keywords</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.keywords}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Cast</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.cast && item.cast.split(',').map(castMember =>
                            <picture><img className='w-10 h-10 inline-block m-1' src={`http://localhost:8000/storage/uploads/cast/${castMember}`} alt="" /></picture>
                                    )}</p>
                                </div>
                            </div>
                            </div>

                            <div className='w-1/2'>

                            <div className="flex w-1/2">
                                <div className="Name">

                                  <p className='text-lg font-bold font-manrope pb-2'>Seo Title</p>
                                </div>
                                <div className="Value">
                                <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.seo_title}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Seo Description</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.seo_description}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Director Name</p>
                                  <p className='text-lg font-bold font-manrope pb-2'>Unlikes</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.d_name}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Director Photo</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.d_photo}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Musician Name</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.m_name}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Musician Photo</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.m_photo}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Status</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.status}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Premium</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.premium}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Views</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.views}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Likes</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.likes}</p>
                                </div>
                            </div>
                            <div className="flex w-1/2">
                                <div className="Name">
                                  <p className='text-lg font-bold font-manrope pb-2'>Unlikes</p>
                                </div>
                                <div className="Value">
                                  <p className='text-lg font-bold font-manrope pb-2 text-black/75'>: {item.unlikes}</p>
                                </div>
                            </div>
                            </div>
                            </div>
                            {/* Data Show End */}
                        </div>
                    </div>
                    }
                    {/* Modal End */}
                    </React.Fragment>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
