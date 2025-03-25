import React from 'react'
import doc from "../../assets/front-view-black-nurses-work.jpg"
import Title from '../ui/Title'
import GlobalBtn from '../ui/GlobalBtn'

const Appointment = () => {
    return (
        <div className='relative'>
            <div className='bg-[#F4F6F9] h-50 mb-40'></div>
            <div className='bg-white h-80 '> </div>

            <div className='absolute bg-[#2390EB] top-20 
             flex lg:left-34 lg:pl-10 lg:pr-2
             gap-10
             max-[769px]:flex-col-reverse
             max-[769px]:py-10
            max-[769px]:pl-11
            max-[769px]:pr-11
            max-[575px]:pl-4
            max-[575px]:pr-4
            max-[769px]:left-0
    

        '>
                <div className='lg:w-180
                max-[769px]:w-170
                max-[575px]:w-100
                '>
                    <img
                        className='size-full object-cover
                
                '
                        src={doc} alt="Doctor" />
                </div>

                <form className='lg:py-20 max-[769px]:flex 
                max-[769px]:flex-col max-[769px]:items-center 
                '>
                    <div className='flex mb-2'>
                        <Title> Appointment </Title>
                    </div>
                    <label className='lg:text-5xl
                 text-white max-[769px]:text-4xl max-[769px]:mt-4
                 '> Apply For Free Treatments
                    </label>

                    <div className='flex flex-wrap gap-6 mt-10
                    max-[769px]:justify-center
                    max-[769px]:flex-col
                    '>
                        <input
                            className='
                            lg:w-100
                            max-[769px]:w-140
                            max-[575px]:w-90
                            bg-[#43A0EE]
                            pl-4
                            py-4
                            placeholder-white
                            
                    '
                            type="text" placeholder='Your Name' />

                        <input
                            className='
                            lg:w-100
                            max-[769px]:w-140
                            max-[575px]:w-90
                            bg-[#43A0EE]
                            pl-4
                            py-4
                            placeholder-white
                    '
                            type="email" placeholder='Your Email' />

                        <input
                            className='
                            lg:w-100 
                            max-[769px]:w-140
                            max-[575px]:w-90
                            bg-[#43A0EE]
                            pl-4
                            py-4
                            placeholder-white
                            '
                            type="text" placeholder='Your Doctor Name' />

                        <input
                            className='
                            lg:w-100 
                            max-[769px]:w-140
                            max-[575px]:w-90
                            bg-[#43A0EE]
                            py-4
                            pl-4
                          placeholder-white
                    '
                            type="text" placeholder='Your Disease Name' />

                    </div>

                    <div className='flex mt-10'>
                        <GlobalBtn bg='bg-white'
                            padding='lg:px-4 max-[769px]:px-6'
                            paddingY='lg:py-2 max-[769px]:py-3'
                            rounded='rounded-[5px]' textBtn='SEND MESSAGE' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Appointment