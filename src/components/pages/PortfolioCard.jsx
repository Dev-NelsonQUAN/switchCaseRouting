import React from 'react'
import { FaPlus } from 'react-icons/fa'
import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';


const PortfolioCard = ({ headTxt, pTxt , doc}) => {


    return (
        <div className='bg-cover 
        bg-top 
        lg:w-80 lg:h-90 
        max-[769px]:w-175
        max-[769px]:h-90
        max-[575px]:w-90
        cursor-pointer p-5 flex flex-col justify-between
        '
            style={{ backgroundImage: `url(${doc})` }}
        >
            <div className='pl-20'>
                <div className='bg-[#2394EB]
            justify-self-end
            p-3
            rounded-[5px]
            flex items-center justify-center
            '> <FaPlus color='white' size={20} /> </div>
            </div>

            <div className='bg-white flex flex-col items-center self-start lg:px-4
                max-[769px]:px-51 
                max-[769px]:py-2
                max-[575px]:px-24
            '>
                <h6 className='text-[#2490EB] 
                lg:text-[14px]
                max-[769px]:text-[14px]
                max-[575px]:text-[12px]
                '>{headTxt}</h6>
                <p className='
                lg:text-2xl
                max-[575px]:text-[12px]
                '> {pTxt} </p>
            </div>
        </div>
    )
}


export default PortfolioCard