import React from 'react'
import VideoPlay from '../component/videoPlay'
import SubVideo from '../component/subVideo'

export default function PlayVideo() {
  return (
    <>
        <section className='content content_box center'>
            <div style={{ padding:'0 100px',alignItems:'flex-start' }} className='d_flex justify_space_between'>
                <VideoPlay/>
                <SubVideo/>
            </div>
        </section>
    </>
  )
}
