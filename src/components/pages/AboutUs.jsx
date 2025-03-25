import React from 'react'
import docNPatient from '../../assets/optalmologist.jpg'
import Title from '../ui/Title'
import { FaPlus } from 'react-icons/fa'
import { FaCheck } from "react-icons/fa6";
import Btn from '../ui/Btn'


const AboutUs = () => {
    return (
        <div className='lg:px-34 flex lg:flex-row py-10 lg:pb-20 bg-[#F4F6F9] gap-12
        md:px-8 md:flex-col
        md:pb-15
        '>
            <div className='lg:w-300
            md:w-175
            '>
                <img
                    className='w-full h-full object-cover rounded-[5px]'
                    src={docNPatient}
                    alt="Doctor and patients" />
            </div>

            <div className='py-4'>
                <div className=' '>
                    <div className='flex'>
                        <Title> WHAT ABOUT US </Title>
                    </div>

                    <div className='mt-2'>
                        <h1 className='lg:text-5xl lg:font-medium leading-13
                        md:text-5xl md:font-medium
                        '>The Heart and Science of Medicate test</h1>
                        <p 
                            className='font-light text-s lg:leading-7 mt-2'
                        >It is a long established fact that a reader will be distracted by at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className='my-7 flex flex-col gap-5 font-bold'>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Comprehensive Inpatient Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Medical And Surgical Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Outpatient Services</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Medicine & instrument</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Specialised Support Service</p>
                    <p className='flex items-center gap-2'> <FaCheck color='#2490EB' /> Instant Operation & Appointment</p>
                </div>

                <div className='pt-5 flex'>
                    <Btn> READ MORE <FaPlus /> </Btn>
                </div>
            </div>
        </div>
    )
}

export default AboutUs 