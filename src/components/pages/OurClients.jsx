import React from 'react'
import Title from '../ui/Title'
import CompLayout from '../../layout/CompLayout'
import OurClientsCard from './OurClientsCard';
import imgOne from '../../assets/dentalCare.jpeg'
import OurCleintsImg from './OurCleintsImg';
import logo from '../../assets/logo.png'

const OurClients = () => {
    return (
        <div className='flex flex-col px-16 item-center lg:py-10 lg:mb-20 
            max-[769px]:pt-150
            max-[769px]:px-8

        '>
            <CompLayout>

                <div className='flex flex-col items-center'>
                    <div className='flex'>
                        <Title> OUR CLIENTS </Title>
                    </div>
                    <h1 className='lg:text-4xl font-medium mt-4
                    max-[769px]:text-3xl
                    max-[575px]:text-[22px]
                    '>Our Client Happy Say About Us. </h1>
                </div>

                <div className='flex justify-between gap-8 lg:mt-8
                flex-wrap max-[769px]:mt-14
                '>
                    <OurClientsCard
                        txtp='There are more reasons regarding your health, so we need to watch out for it. Health is wealth they say.'
                        img={imgOne}
                        headHSix='Dr. Martin Luther'
                        position='SURGEON, HEAD'
                    />

                    <OurClientsCard
                        txtp='There are more reasons regarding your health, so we need to watch out for it. Health is wealth they say.'
                        img={imgOne}
                        headHSix='Dr. Lionell Asake'
                        position='SURGEON, HEAD'
                    />
                </div>


                <div className='border-t-1 border-zinc-500 
                lg:py-13 flex 
                lg:justify-between lg:mt-30
                flex-wrap 
                max-[769px]:items-center
                max-[769px]:flex-col
                max-[769px]:gap-10
                max-[769px]:py-13
                max-[769px]:mt-15
                
                '>
                    <OurCleintsImg result={logo} />
                    <OurCleintsImg result={logo} />
                    <OurCleintsImg result={logo} />
                    <OurCleintsImg result={logo} />
                    <OurCleintsImg result={logo} />
                </div>
            </CompLayout>
        </div>
    )
}

export default OurClients