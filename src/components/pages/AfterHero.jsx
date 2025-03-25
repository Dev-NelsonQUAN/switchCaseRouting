import React from 'react';
import HeroBotCards from './HeroBotCards';
import { FaUserDoctor } from "react-icons/fa6";
import { GiDoctorFace } from "react-icons/gi";
import { TbCheckupList } from "react-icons/tb";
import { TbReportMedical } from "react-icons/tb";
import Btn from "../ui/Btn"
import { FaPhoneSquare, FaPlus } from 'react-icons/fa';

const AfterHero = () => {
  return (
    <div className=' 
    bg-[#F4F6F9]
    lg:h-70
    max-[769px]:h-140
    relative
    lg:px-34 
    lg:py-11
    max-[769px]:px-10
    max-[575px]:h-280
    max-[575px]:px-3
    max-[575px]
  
 '>
      <div className=' absolute bottom-0 flex gap-8 flex-wrap
          justify-center lg:left-34
          md:left-0
          max-[769px]:left-0
          max-[575px]:left-0

        '>
        <HeroBotCards
          background='bg-[#2490EB]'
          iconLeft={<FaUserDoctor size={50} color='white' />}
          iconRight={<FaUserDoctor color='#265385' size={50} />}
          h1Txts='Emergency Cases'
          pTxts='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
          iconBottom={<FaPhoneSquare />}
          number='+234-907784858'
        />
        <HeroBotCards
          background='bg-[#14457B]'
          iconLeft={<GiDoctorFace size={50} color='white' />}
          iconRight={<GiDoctorFace color='#265385' size={50} />}
          h1Txts='Doctors Timetable'
          pTxts='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'
          Btn={<Btn> Timetable <FaPlus /> </Btn>}
        />

        <HeroBotCards
          background='bg-[#2490EB]'
          iconLeft={<TbCheckupList size={50} color='white' />}
          iconRight={<TbReportMedical color='#265385' size={50} />}
          h1Txts='Opening Hours'
          dayOne='Monday'
          dayOneTM='8:00 - 9:00'
          dayTwo='Tuesday'
          dayTwoTM='7:00 - 8:00'
          dayThree='Wednesday'
          dayThreeTM='6:00 - 5:00'
          dayFour='Thursday'
          dayFourTM='5:00 - 7:00'
        />
      </div>
    </div>
  )
}

export default AfterHero