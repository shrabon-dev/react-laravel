import React from 'react'
import './index.css'
export default function Notification(props) {
  return (
    <>
    <div className="notif">
        <p>{props.message}</p>
    </div>
    </>
  )
}
