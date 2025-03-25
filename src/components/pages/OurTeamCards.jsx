import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaGooglePlusG } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'

const OurTeamCards = ({ docsImage, docsName, docsProfessions }) => {
    return (
        <div className='relative cursor-pointer' >
            <div className='bg-[#2394EB] flex flex-col absolute right-0'>
                <div className='p-2' >
                    <FaFacebook color='white' />
                </div>

                <div className='p-2'>
                    <BsTwitter color='white' />
                </div>

                <div className='p-2'>
                    <FaGooglePlusG color='white' />
                </div>
            </div>
            <div className='h-100 w-105'>
                <img 
                className='size-full object-cover'
                src={docsImage} alt="Doctors" />
            </div>

            <div className='h-20' >
                <div className='absolute bg-white shadow-2xl rounded-[8px] p-4 px-16 bottom-10 left-20 flex flex-col items-center'>
                    <h4 className='text-2xl'> {docsName} </h4>
                    <p className='text-[#2390EB]'>{docsProfessions}</p>
                </div>
            </div>

        </div>
    )
}

export default OurTeamCards