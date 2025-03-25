import React from 'react'
import { BsQuote } from 'react-icons/bs'
import { CgQuote } from 'react-icons/cg'
import { FaQuoteRight } from 'react-icons/fa'

const OurClientsCard = ({ txtp, headHSix, position, img }) => {
    return (
        <div className='bg-[#F4F6F9] rounded-2xl px-6 py-6'>
            <div>
                <p className='text-[18px]  
                lg:w-147 text-[#6F6B66] leading-8
                
                '>{txtp}</p>
            </div>

            <div className='flex justify-between mt-8'>
                <div className='flex items-center gap-2.5'>
                    <div 
                    className='w-[60px] h-[60px]'
                    >
                        <img
                            className='size-full object-cover rounded-full'
                            src={img} alt="Images" />
                    </div>

                    <div className='flex items-center justify-between' >
                        <div className='flex flex-col'>
                            <h3 className='lg:text-2xl'>
                                {headHSix}
                            </h3>

                            <p className='text-[#2394EB] mt-2
                            max-[769px]:text-[13px]
                            '>{position}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                        <FaQuoteRight color='#2394EB' size={30}/>
                </div>
            </div>
        </div>
    )
}

export default OurClientsCard