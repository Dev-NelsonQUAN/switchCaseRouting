import React from 'react'
import Title from '../ui/Title'
import CompLayout from '../../layout/CompLayout'
import OurBlogCards from './OurBlogCards'
import { CiMail } from 'react-icons/ci'
import GlobalBtn from '../ui/GlobalBtn'
import Btn from '../ui/Btn'

const OurBlog = () => {
  return (
    <div className='bg-[#F4F6F9] lg:py-35 lg:pb-50 lg:px-18 relative
      max-[769px]:py-15
      max-[769px]:pb-50
      max-[769px]:px-18
      max-[575px]:pb-40
      max-[575px]:px-6

    ' >
      <CompLayout>

        <div className='flex flex-col items-center '>
          <div className='flex'>
            <Title> OUR BLOG </Title>
          </div>
          <h1 className='text-3xl
          lg:mt-5
            max-[769px]:mt-4
            font-medium
            '>See Our Latest Blog</h1>
        </div>

        <div className='lg:mt-13 flex max-[769px]:flex-wrap justify-between
        max-[769px]:mt-10 
        max-[769px]:gap-10
        '>
          <OurBlogCards />
          <OurBlogCards />
          <OurBlogCards />
        </div>

        <div className='bg-[#2390EB] px-4 lg:py-12 absolute bottom-[-60px]
          flex lg:gap-28
          max-[769px]:py-4 
          max-[769px]:flex-col 
          max-[769px]:gap-4
          max-[769px]:left-26
          max-[575px]:left-6
        '>

          <div className='flex items-center lg:gap-4
          max-[769px]:gap-4
          max-[575px]:gap-2
          '>
            <CiMail
              className='
              max-[769px]:size-[34px]
              max-[575px]:size-[26px]
              
              '
              color='white'
              size={90}
            />
            <h2 className='lg:text-4xl lg:w-110 font-medium text-white
            max-[769px]:text-[20px]
            max-[575px]:text-[14px]
            '> Latest Updates Subscribe To Our Newsletter </h2>
          </div>

          <form className='flex py-4 lg:gap-4
              max-[769px]:gap-5
          '>
            <input
              className='lg:w-130 bg-[#43A0EE] px-3 placeholder-white
                max-[769px]:w-105
                max-[769px]:py-3
                max-[575px]:w-60
                max-[575px]:py-2

                '
              type='text' placeholder='Enter Your Email' />

            <Btn padding='5px 10px' bg='white'
            
              color='#2390EB'> SIGN UP</Btn>
          </form>
        </div>

      </CompLayout>
    </div>
  )
}

export default OurBlog