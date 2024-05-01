import React from 'react'

export default function SubVideo() {
  return (
    <>
        <div style={{ width:'25%',height:'90vh',paddingRight:'20px',overflowY:'auto' }}>
            {/* ===== Sub or All Related Video List Start ===== */}
            <div className='d_flex justify_space_between' style={{ width:'100%',height:'120px',paddingBottom:'5px',marginBottom:'5px',borderBottom:'1px solid #00000020' }}>
                <video className='border_radius' poster='https://images.unsplash.com/photo-1641638791220-e0346f44b074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&w=1000&q=80' style={{ width:'220px',height:'100%' }}>
                    <source src={''}  type='video/mp4'/>
                </video>
                {/* ==== video info ==== */}
                <div style={{ paddingLeft: '10px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* ==== Title Of Video ==== */}
                <h3 style={{ fontSize: '14px' }}>জিব্রাইল আঃ এর গল্প বাংলা ডাবিং - শায়েখ ওমর সুলেইমান</h3>
                <div className='pt_4'>
                    <p style={{ fontSize: '14px', fontFamily: '', paddingBottom: '5px', opacity: '.8', color: '#000000',fontWeight:'bold' }}>IslamicVideo</p>
                    <div className='d_flex justify_space_between'>
                    <p style={{ fontSize: '14px', fontFamily: '', paddingBottom: '5px', opacity: '.7', color: '#000000' }}>30M views</p>
                    <p style={{ fontSize: '14px', fontFamily: '', paddingBottom: '5px', opacity: '.7', color: '#000000' }}>1 year ago</p>
                    </div>
                </div>
                </div>
            </div>
            {/* ===== Sub or All Related Video List End ===== */}
        </div>
    </>
  )
}
