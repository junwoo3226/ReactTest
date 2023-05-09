import React, { useState }  from 'react'
import Image from 'next/image'
import HeadInfo from '../components/HeadInfo'

const Eagle = () => {
    let [좋아요, 좋아요변경] = useState(0); 
  return (
    <div>
        <HeadInfo title='독수리'/>
        <Image src="/Eagle.jpg" alt='Eagle' width={500} height={500} />
        <div className="like">
            <span className='button' onClick={()=>{좋아요변경(좋아요 + 1)}}>❤</span> {좋아요}
        </div>
    </div>
  )
}

export default Eagle