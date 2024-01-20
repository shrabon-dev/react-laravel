import React from 'react'

import Video from '../../reusable/Video'

export default function Videos() {
  return (
    <>
    <section className='container' style={{ paddingBottom:'250px' }}>
        <div className='d_flex' style={{ gap:'15px',flexWrap:'wrap' }}>
        {/* Video Box Start */}
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
        {/* Video Box End */}
        </div>
    </section>
    </>
  )
}
