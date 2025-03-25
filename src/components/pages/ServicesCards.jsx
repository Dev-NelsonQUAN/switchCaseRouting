import React from 'react'
import GlobalBtn from '../ui/GlobalBtn'
import Btn from '../ui/Btn'
import { FaPlus } from 'react-icons/fa'

const ServicesCards = ({icon, textH, txtP}) => {
  return (
    <div className={`flex flex-col items-center gap-6 py-4 outline-blue-200`}>
        <div>
            {icon}
        </div>

        <div className='flex flex-col items-center'>
            <h3 className='text-3xl'>{textH}</h3>
            <p className='w-80 text-center text-[#6B7C8E] mt-4'>{txtP}</p>
        </div>

        <div>
            <GlobalBtn textBtn='Read More' iconBtn={<FaPlus />} color='text-[#2490EB]' bg='bg-[white]' gap='gap-2'/>
        </div>
    </div>
  )
}

export default ServicesCards