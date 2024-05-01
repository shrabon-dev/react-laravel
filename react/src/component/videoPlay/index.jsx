import React, { useEffect, useState } from 'react'
// import video from '../../assets/video/v1.mp4'
import profile from '../../assets/profile.jpg'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import './index.css'
import Api from '../../api';


export default function VideoPlay() {

    let [videofile,setVideofile] = useState();
    let [isLoading,setIsLoading] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
          try {
            let response = await Api.get('upload/1');
            let data = response.data;
            setIsLoading(true)
            setVideofile(data);
            setIsLoading(false)
            console.log(data)
          } catch (error) {
            console.log(error);
          }
        };

        fetchData();
      }, []);

    //   useEffect(() => {
    //     if (videofile) {
    //       console.log(videofile);

    //       const videoElement = document.getElementById('video');
    //       if (videoElement) {
    //         videoElement.src = `http://localhost:8000/storage/uploads/video/${videofile.video}`;
    //         videoElement.poster = `http://localhost:8000/storage/uploads/thumbnail/${videofile.thumbnail}`;
    //       }
    //     }
    //   }, [videofile]);


  return (
    <>
    <div style={{ width:'70%' }}>
    {/* <div className="w-full" style={{ background:'#f1f1f1',boxShadow:'0 0 50px 0 #10101042',borderRadius:'10px',width:'100%' }}> */}
        <div className="mainVideo">
            <video id="video" controls className='w-full' poster={`http://localhost:8000/storage/uploads/thumbnail/${videofile && videofile.thumbnail}`}>
            {videofile &&
                <>
                    <source src={`http://localhost:8000/storage/uploads/video/${videofile.video}`} type='video/mp4'/>
                    <source src={`http://localhost:8000/storage/uploads/video/${videofile.video}`} type='video/org'/>
                </>
            }
            </video>
        </div>
        {/* =============== Video Info Start =============== */}
        <div style={{ padding: '20px',boxShadow:'0 0 150px 0 #CACCCD',borderRadius:'16px',marginTop:'20px' }}>
            <h3 style={{ paddingBottom:'10px' }}>Salaar Hindi Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films| Vijay Kiragandur</h3>

            <div className='d_flex justify_space_between'>
                <div className="d_flex">
                    {/* ==== Movie Details ==== */}
                    <div>
                        <ul>
                            <li><span style={{ fontSize:'14px', fontWeight:'700', paddingLeft:'10px',paddingBottom:'5px' }}>Movie Name :</span><span style={{ fontSize:'14px',paddingLeft:'10px', opacity:'.8' }}>Salaar</span></li>
                            <li><span style={{ fontSize:'14px', fontWeight:'700', paddingLeft:'10px',paddingBottom:'5px' }}>Producer :</span><span style={{ fontSize:'14px',paddingLeft:'10px', opacity:'.8' }}> Vijay Kiragandur</span></li>
                            <li><span style={{ fontSize:'14px', fontWeight:'700', paddingLeft:'10px',paddingBottom:'5px' }}>Actress :</span><span style={{ fontSize:'14px',paddingLeft:'10px', opacity:'.8' }}> Prabhas, Prithviraj, Shruthi Hassan</span></li>
                            <li><span style={{ fontSize:'14px', fontWeight:'700', paddingLeft:'10px',paddingBottom:'5px' }}>Release Date : </span><span style={{ fontSize:'14px',paddingLeft:'10px', opacity:'.8' }}>12 Dec, 2023</span></li>
                            <li><span style={{ fontSize:'14px', fontWeight:'700', paddingLeft:'10px',paddingBottom:'5px' }}>Studio :</span><span style={{ fontSize:'14px',paddingLeft:'10px', opacity:'.8' }}>Hombale Films</span></li>
                        </ul>
                    </div>
                </div>
                {/* Like & Unlike */}
                <div className='d_flex'>
                    <div className='d_flex align_item_center'>
                        <div className="like hover" style={{ background:'#e7471730',padding:'10px',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',borderRight:'1px solid #ffffff',cursor:'pointer' }}> 5.2k <AiOutlineLike /> </div>
                        <div className="unlike hover" style={{ background:'#e7471730',padding:'10px',borderTopRightRadius:'10px',borderBottomRightRadius:'10px',cursor:'pointer' }}><AiOutlineDislike /> 1.2k </div>
                    </div>
                    <div className='d_flex align_item_center pl_2'>
                        <div className="like hover" style={{ background:'#e74717',padding:'10px 20px',borderRadius:'10px',cursor:'pointer',color:'#f2f2f2' }}> Subscribe </div>

                    </div>
                </div>
            </div>
        {/* ==== Description Start ==== */}
        <p style={{ fontSize:'14px',fontWeight:'400',paddingTop:'20px' }}>
        আল্লাহ আমাদের কতটা ভালোবাসেন একবার শুনুন || নোমান আলী খান
        নওমান আলী খান,কিভাবে বুঝবেন আল্লাহ আপনাকে ভালোবাসেন,আল্লাহ যখন কাউকে ভালোবাসে,আল্লাহর ভালোবাসা,মিজানুর রহমান আজহারি,বান্দার প্রতি আল্লাহর দয়া ও ভালবাসা,পর্বতের চেয়ে বেশি গুনাহ করেছি আল্লাহ কি আমাকে ক্ষমা করবেন,আল্লাহ এত দয়ালু হওয়ার পরেও মানুষদের এত কষ্ট দেন কেন,মিজানুর রহমান আজহারী ওয়াজ,ভালোবাসার মানুষকে বিয়ে করার আমল,আল্লাহর দয়া ও ভালবাসা,আল্লাহ কতটুকু ক্ষমাশীল,বান্দা যখন আল্লাহর কাছে ক্ষমা চায় 😓,ভালোবাসার মানুষকে বিয়ে করার দোয়া
        </p>
        {/* ==== Description End ==== */}
        </div>
        {/* =============== Video Info End =============== */}
    </div>
    </>
  )
}
