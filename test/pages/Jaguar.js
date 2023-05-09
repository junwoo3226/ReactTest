import React, { useState }  from 'react'
import Image from 'next/image'
import HeadInfo from '../components/HeadInfo'

const Jaguar = () => {
    let [좋아요, 좋아요변경] = useState(0); 
  return (
    <div>
        <HeadInfo title='표범종류'/>
        <Image src="/치타.jpg" alt='표범' width={500} height={500} />
        <div className="like">
            <span className='button' onClick={()=>{좋아요변경(좋아요 + 1)}}>❤</span> {좋아요}
        </div>
    </div>
  )
}

export default Jaguar