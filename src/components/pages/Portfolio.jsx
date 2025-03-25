import React from 'react'
import Title from '../ui/Title'
import PortfolioCard from './PortfolioCard'
import imgOne from '../../assets/eyeCare.jpeg'
import imgTwo from '../../assets/dentalCare.jpeg'
import imgThree from '../../assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg'
import imgFour from '../../assets/nurse-her-work-clinic-wearing-scrubs-gloves.jpg' 

const Portfolio = () => {
  return (
    <div className='bg-[#2490EB] relative flex flex-col items-center lg:pt-20
    max-[769px]:pt-14
    '>
      <div>
        <div className='flex justify-center' >
          {/* qfyqey */}
          <Title > OUR PORTFOLIO </Title>
        </div>
        <h1 className='text-white text-4xl lg:mt-6 max-[769px]:mb-10
        max-[769px]:mt-6
        '>All The Great Work That We Done </h1>
      </div>

      <div className='lg:h-110 w-full lg:mt-30 bg-white 
        max-[769px]:h-420
      '>

      </div>

      <div className='mt-8 flex gap-6 absolute lg:py-35
      lg:top-20  max-[769px]:top-50 max-[769px]:flex-col max-[769px]:left-9
      max-[769px]:justify-center
      ' >
        <PortfolioCard headTxt='Family' 
        doc={imgOne}
          pTxt='Eye Health for families'
        />
        <PortfolioCard headTxt='Health'
        doc={imgTwo}
          pTxt='Dental Care for families'
        />
        <PortfolioCard headTxt='Personal'
        doc={imgThree}
          pTxt="We care for Your seeds."        
          />

        <PortfolioCard headTxt='Insured'
        doc={imgFour}
          pTxt='Providing Health for all'
        />
      </div>


    </div>
  )
}

export default Portfolio