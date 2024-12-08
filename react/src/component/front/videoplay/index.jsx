import React, { useRef, useState } from 'react';
import poster from '../../../assets/poster.jpg'; // Correctly importing the poster image
import video from '../../../assets/video/movie.mp4'; // Correctly importing the video file
import { FaPlay } from "react-icons/fa6";
import { AiFillLike,AiFillSound } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { IoPlaySharp,IoPause,IoExpand,IoVolumeMuteSharp } from "react-icons/io5";
import { TbPlayerTrackNextFilled,TbPlayerTrackPrevFilled } from "react-icons/tb";
import {BASE} from '../../../api';

export default function VideoPlay({id}) {
    const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false);
  const [rangeValue, setRangeValue] = useState(0);
  const [videoPlay,setVideoPlay] = useState(false);
  
 
  // Toggle play/pause functionality
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle volume toggle (mute/unmute)
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  // Handle range slider input
  const handleRangeChange = (value) => {
    if (videoRef.current) {
      videoRef.current.currentTime =
        (value / 100) * videoRef.current.duration;
      setRangeValue(value);
    }
  };

  // Update the range slider as the video plays
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setRangeValue((currentTime / duration) * 100);
    }
  };

  // Fullscreen functionality
  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };
  const skipTime = (seconds) => {
    if (videoRef.current) {
      let newTime = videoRef.current.currentTime + seconds;
      if (newTime < 0) newTime = 0; // Prevent negative time
      if (newTime > videoRef.current.duration)
        newTime = videoRef.current.duration; // Prevent exceeding duration
      videoRef.current.currentTime = newTime;
    }
  };
  const handleVideoPlay = () => {
    if (videoRef.current) {
      setVideoPlay(true);
      videoRef.current.play();
    }
  };
  return (
    <>
        <section className='pt-[118px] '>
            <div className="container-fluid">
                <div className="w-full relative rounded-lg overflow-hidden h-[835px]">
                    {/* Use the imported video file as the src */}
                    <video 
                         autoPlay={false}
                         controls={false}
                        src={`${BASE}/`} 
                        className='w-full object-cover h-full rounded-lg' 
                        id='box-video' 
                        poster={poster}    ref={videoRef}  onTimeUpdate={handleTimeUpdate}>
                            
                        <source src={video} type="video/mp4" />
                    </video>
                    {videoPlay && 
                    <div className="video_control w-[90%] border border-border rounded-lg bg-body/60 backdrop-blur-lg bottom-10 -translate-x-1/2 left-1/2 p-3 box-border">
                         
                        <div className="vc_bottom flex justify-center gap-5 items-center">
                        <div className="grp flex justify-end gap-3">
                            <div  className="truck_prev_btn cursor-pointer">  <TbPlayerTrackPrevFilled onClick={() => skipTime(-5)} className='inline-block text-white text-2xl'/> </div>
                            <div   onClick={togglePlayPause} className="play_puse_btn cursor-pointer"> 
                            {isPlaying ? (
                            <IoPause  className='inline-block text-white text-2xl'/> 
                            ) : (
                            <IoPlaySharp className="inline-block text-white text-2xl" />
                            )}
                            </div>
                            <div className="truck_next_btn cursor-pointer"> <TbPlayerTrackNextFilled   onClick={() => skipTime(15)} className='inline-block text-white text-2xl'/> </div>
                        </div>
                        <div className="cur_play_duration font-manrope text-sm text-white font-normal"><span>
                        {videoRef.current && !isNaN(videoRef.current.currentTime)
                        ? new Date(videoRef.current.currentTime * 1000)
                            .toISOString()
                            .substr(11, 8)
                        : "00:00:00"}    
                        </span></div>
                        <div className="play_truck w-9/12">
                            <input type="range" className='play_truck_range'   
                            name=""
                            value={rangeValue}
                            min="0"
                            max="100" onChange={(e) => handleRangeChange(e.target.value)}
                            onMouseMove={(e) => handleRangeChange(e.target.value)}/>
                        </div>
                        <div className="rem_play_duration font-manrope text-sm text-white font-normal"><span>
                        {videoRef.current &&
                        !isNaN(videoRef.current.duration) &&
                        !isNaN(videoRef.current.currentTime)
                          ? new Date(
                              (videoRef.current.duration - videoRef.current.currentTime) * 1000
                            )
                              .toISOString()
                              .substr(11, 8)
                          : "00:00:00"}      
                        </span></div>
                        <div className="truck_next_btn cursor-pointer"> <IoExpand  onClick={handleFullscreen} className='inline-block text-white text-2xl'/> </div>
                        <div className="grp">
                            {/* <div className="mute_btn"> <IoVolumeMuteSharp className='inline-block text-white text-2xl'/> </div> */}
                            <div  className="sound_btn cursor-pointer"> <AiFillSound onClick={toggleMute} className='inline-block text-white text-2xl'/> </div>
                        </div>
                        </div>
                    </div> }
                    
                    
                    {/* Video Info Start */}
                    {/* Uncomment and update the overlay content if needed */}
                    {!videoPlay  &&
                    <>
                     <div className="overlay-video absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-black z-[9999]">
                        <div className="video-info absolute w-full bottom-10">
                            <h3 className='font-manrope font-bold text-xl sm:text-xl md:text-4xl text-white text-center'>Wolf Hunting</h3>
                            <p className='font-manrope font-normal text-sm md:text-lg text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum sapiente voluptatum similique non doloremque praesentium? Quo natus atque veniam.</p>
                            <div className="flex items-center justify-center gap-3 pt-5">
                                <div className="play">
                                    <button onClick={handleVideoPlay} className='flex w-max px-3 md:px-6 not-italic py-2 md:py-3 mt-0 bg-[#E50000] border-[#E50000] items-center gap-2 font-manrope font-semibold text-none text-sm md:text-lg'> <FaPlay/> Play Now</button>
                                </div>
                                <div className="like bg-[#0F0F0F] border border-[#262626] w-9 md:w-[56px] h-9 md:h-[56px] rounded-lg text-white flex justify-center items-center text-sm md:text-2xl"> <AiFillLike/> </div>
                                <div className="like bg-[#0F0F0F] border border-[#262626] w-9 md:w-[56px] h-9 md:h-[56px] rounded-lg text-white flex justify-center items-center text-sm md:text-2xl"> <FaPlus/> </div>
                            </div>
                        </div>
                    </div>
                    </>
                   
                      }
                </div>
            </div>
        </section>
    </>
  );
}
