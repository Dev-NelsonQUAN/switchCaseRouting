import React from 'react'
import Title from '../ui/Title'
import { FaPlus } from 'react-icons/fa6'
import Btn from '../ui/Btn'
import img from '../../assets/nurse-her-work-clinic-wearing-scrubs-gloves.jpg'
import { LiaStethoscopeSolid } from "react-icons/lia";


const AboutDetails = () => {
  return (
    <div className='relative lg:flex 
    max-[769px]:flex
    max-[769px]:flex-col
  
    '>
      <div className='bg-[#F4F6F9] lg:w-1/2 lg:h-105
          max-[769px]:w-full max-[769px]:h-240 

          '></div>
      <div className='lg:bg-[#14457B] lg:w-1/2 lg:h-185
      max-[769px]:w-full max-[769px]:pr-50 lg:pr-0 max-[769px]:h-70

      '> </div>

      <div className='flex absolute lg:top-25 lg:left-35 lg:gap-0 
       lg:flex-row max-[769px]:flex-col 
       max-[769px]:left-4 
       max-[769px]:top-22 max-[769px]:gap-10 
       max-[769px]:px-6
       max-[575px]:px-2
        max-[575px]:left-0

       '>
        <div className='l:w-130
        max-[575px]:
        '>
          <div className='flex'>
            <Title> ABOUT US </Title>
          </div>

          <div>
            <h4 className='font-medium lg:text-5xl lg:w-105 leading-15 mt-4 
            max-[575px]:text-5xl max-[769px]:w-175
            max-[575px]:w-100
            '>Joining Hands to Eradicate illness </h4>
            <p className='text-s font-light lg:w-120  
            max-[769px]:w-165
            leading-loose mt-4 
            max-[575px]:w-80
            
            '>
              Medicate is here for you, waving goodbye to the illness you always experience, with God's grace, We bring health in full,for Jesus paid in full.
            </p>
          </div>

          <div className='flex items-center gap-5 mt-8'>
            <div className='size-20 rounded-full bg-[#2490EB] flex justify-center items-center

            
            '>
              <LiaStethoscopeSolid color='white' size={45} />
            </div>

            <div>
              <h6 className='font-medium lg:text-2xl
              max-[769px]:text-[22px]
              '>Infection Prevention </h6>
              <p className='text-s font-light lg:mt-4 
              max-[769px]:mt-2
              lg:w-89 
              max-[769px]:w-100
              max-[575px]:w-70
              '> There are many variations of passages of patients in with us </p>
            </div>
          </div>

          <div className='flex mt-15'>
            <Btn> READ MORE <FaPlus /> </Btn>
          </div>
        </div>

        <div className='flex lg:flex-row max-[769px]:flex-col
        md:justify-center items-center 
        max-[769px]:gap-20
        max-[769px]:mt-5
        max-[575px]:mt-5
          max-[575px]:gap-10
        
        '>
          <div className='lg:w-135 
          lg:h-128
          max-[769px]:w-172 
          max-[575px]:w-67
          '>
            <img
              className='size-full object-cover'
              src={img} alt="Doctor And Patient" />
          </div>

          <div className='lg:px-6 flex lg:flex-col 
          max-[769px]:flex-row justify-center gap-5
            max-[769px]:bg-[#14457B] 
            max-[769px]:px-24 
            max-[769px]:b-4 
            max-[769px]:py-6
            max-[575px]:px-2
             
            '>
            <div className='flex flex-col items-center'>
              <h5 className='font-medium text-[#1B4B7F] lg:text-4xl 
                    max-[769px]:text-2xl
                    max-[575px]:text-[13px]
                    '> 450+ </h5>
              <h5 className='font-medium text-white 
                lg:text-4xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> 450+ </h5>
              <p className='text-white 
                lg:text-2xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> Happy Patients </p>
            </div>

            <div className='flex flex-col items-center'>
              <h5 className='font-medium text-[#1B4B7F] lg:text-4xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> 100+ </h5>
              <h5 className='font-medium text-white lg:text-4xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> 100+ </h5>
              <p className='text-white lg:text-2xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> Saved Hearts </p>
            </div>

            <div className='flex flex-col items-center'>
              <h5 className='font-medium text-[#1B4B7F] lg:text-4xl
                max-[769px]:text-2xl
                max-[575px]:text-[13px]
                '> 59+ </h5>
              <h5 className='font-medium text-white lg:text-4xl
              max-[769px]:text-2xl
              max-[575px]:text-[13px]
              ' > 59+ </h5>
              <p className='text-white lg:text-2xl
              max-[769px]:text-2xl
              max-[575px]:text-[13px]
              '> Expert Doctors </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDetails