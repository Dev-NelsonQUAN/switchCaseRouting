import React from 'react'
import Title from '../ui/Title'
import ServicesCards from './ServicesCards'
import { LiaUserNurseSolid } from "react-icons/lia";
import { RiNurseLine } from "react-icons/ri";
import { TbDental } from "react-icons/tb";
import { PiSyringe } from "react-icons/pi";


const Services = () => {
  return (
    <div className='py-25'>
      <div className='flex flex-col items-center'>
        <Title> Our Services </Title>
        <h3 className='text-4xl mt-4'>We Provide Various Directions</h3>
      </div>

      <div className='px-34 gap-2 flex lg:flex-wrap mt-8 lg:justify-between
       max-[769px]:flex-col
      '>
        <ServicesCards icon={<LiaUserNurseSolid size={90} color='#2490EB'
        />}
          textH='Angioplasty'
          txtP="We care for your blood vessels as much as You do, So Unblocking your vessels gives us joy."
        />
        <ServicesCards icon={<RiNurseLine size={90} color='#2490EB' />} 
        textH='Cardiology'
          txtP='We care for your heart as much as you do. Making every beat pleasant to you.'
        />
        <ServicesCards icon={<TbDental size={90} color='#2490EB' />} textH='Dental'
          txtP="We care for your tooth, either you are a sweet tooth or no, You don't have to worry about your cravings" 
        />
        <ServicesCards
          icon={<PiSyringe color='#2490EB' size={90} />}
          textH='Endocrinology'
          txtP="There are many variations of pas of Lorem Ipsum availab"
        />
        <ServicesCards
          icon={<PiSyringe color='#2490EB' size={90} />}
          textH='Endocrinology'
          txtP="There are many variations of pas of Lorem Ipsum availab"
        />
        <ServicesCards
          icon={<PiSyringe color='#2490EB' size={90} />}
          textH='Endocrinology'
          txtP="There are many variations of pas of Lorem Ipsum availab"
        />
        <ServicesCards
          icon={<PiSyringe color='#2490EB' size={90} />}
          textH='Endocrinology'
          txtP="There are many variations of pas of Lorem Ipsum availab"
        />
        <ServicesCards
          icon={<PiSyringe color='#2490EB' size={90} />}
          textH='Endocrinology'
          txtP="There are many variations of pas of Lorem Ipsum availab"
        />

      </div>
    </div>
  )
}

export default Services