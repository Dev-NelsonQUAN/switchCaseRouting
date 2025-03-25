import React from 'react'
import GlobalBtn from '../ui/GlobalBtn'
import { BsPerson, BsPersonFill } from 'react-icons/bs'
import { RiChatSmile2Fill } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'

const OurBlogCards = () => {
  return (
    <div className='rounded-[5px]'>
      <div className='bg-[url(./assets/happyFemaleDoc.jpg)]
       lg:w-100 lg:h-80 lg:bg-center bg-cover
       flex items-end p-4
       max-[769px]:w-140 
       max-[796px]:h-65
       max-[575px]:w-85
       '>
        <div className='bg-[#0a3e69] p-2 '>
          <p className='text-white font-medium'> DECEMBER 5, 2024
          </p>
        </div>

      </div>

      <div className='bg-white lg:px-6 pt-2 lg:pb-8
               max-[769px]:p-3
               max-[769px]:pb-8      
      '>
        <div className='flex gap-4 lg:py-4
        max-[769px]:py-3

        '>
          <p className='flex items-center gap-2 font-medium
          max-[575px]:text-[14px]
          '> <BsPersonFill size={22} color='#2390EB' /> ADMIN</p>
          <p className='flex items-center gap-2 font-medium
          max-[575px]:text-[14px]
          '> <RiChatSmile2Fill size={22} color='#2394EB' /> 0 COMMENTS </p>
        </div>

        <div className='border-t-1 border-gray-600
        max-[769px]:pt-2 
        '>
          <h3 className='lg:text-2xl
          lg:w-80
          lg:mt-2
          max-[796px]:text-[26px]
          max-[575px]:text-[20px]
          max-[575px]:w-60          
          '> Heart Failure Treatment: High Blood Pressure</h3>
          <p className='
          lg:w-80 lg:mt-6
          max-[769px]:mt-2
          max-[769px]:w-110
          max-[575px]:w-75
          '>It is a long established organization as regarding health, best for your health isshhhh</p>
        </div>

        <div className='lg:mt-4
               max-[769px]:mt-6
        
        '>
          <GlobalBtn textBtn='READ MORE' iconBtn={<FaPlus />} gap='gap-4' color='text-[#2394EB]' />
        </div>
      </div>
    </div>
  )
}

export default OurBlogCards