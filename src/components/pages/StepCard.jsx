import React from 'react'

const StepCard = ({imgss, roundedInTxt, emregTxt, emergP}) => {
  return (
    <div className='relative'>
        <div className='max-[769px]:flex max-[769px]:justify-center '> 
            <div className='h-55 w-55 rounded-full  bg-center bg-cover'
            style={{backgroundImage: `url(${imgss})`}}
            >
              
            </div>

            <div className='bg-[#2490EB] w-15 h-15 rounded-full
                absolute top-1 flex justify-center items-center
                max-[769px]:left-10
            '>
                <p className='text-white text-2xl'>{roundedInTxt}</p>
            </div>
        </div>

        <div className='mt-5 
        max-[769px]:text-center
        '>
            <h3 className='text-3xl font-medium
            
            '>{emregTxt}</h3>
            <p className='lg:w-70 lg:mt-2 text-[#747474]
            max-[769px]:w-70 max-[769px]:mt-2
            '>{emergP}</p>
        </div>
    </div>
  )
}

export default StepCard