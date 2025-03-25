import React from 'react'
import { SlCalender } from "react-icons/sl";


const FooterCard = ({img, calTXt, postTxt}) => {
  return (
    <div className='flex '>
        <div className='w-20 h-22'>
            <img 
            className='size-full object-cover rounded-[5px]'
            src={img} alt="Footer image of Doctors" />
        </div>

        <div className='ml-4 py-2'>
            <p className='text-white flex items-center gap-2
            font-medium text-[12px]
            '> <SlCalender color='white' /> {calTXt} </p>
            <p className='text-[18px] w-40 font-medium text-white mt-2'>{postTxt}</p>
        </div>
    </div>
  )
}

export default FooterCard