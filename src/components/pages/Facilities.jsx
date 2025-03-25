import React from 'react'
import Title from '../ui/Title'
import FacilitiesCard from './FacilitiesCard'
import { BsHospital } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { LuClipboardPenLine } from "react-icons/lu";
import docOne from '../../assets/happyFemaleDoc.jpg'
import docTwo from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg'
import docThree from '../../assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg'

const Facilities = () => {
    return (
        <div className='lg:px-34 lg:py-12 md:px-8
        md:py-25
        '>
            <div className='flex flex-col items-center'>
                <div>
                    <Title>FACILITIES WE HAVE </Title>
                </div>

                <h2 className='font-medium lg:text-5xl mt-4 md:text-5xl'> What Facilities We Provided </h2>
            </div>

            <div className='flex gap-8 mt-12 flex-wrap justify-center'>
                <FacilitiesCard
                    facilitiesImg={docOne}
                    medical='MEDICAL SURGERY'
                    services='Eye Care Services'
                    icons={<BsHospital size={35}  color='#2490EB'/>
                    }
                />
                <FacilitiesCard
                    facilitiesImg={docTwo}
                    medical='MEDICAL THERAPY'
                    services='Cardiology Services'
                    icons={<FaUserDoctor size={35} color='#2490EB' />
                    }
                />
                <FacilitiesCard
                    facilitiesImg={docThree}
                    medical='MEDICAL PEDIATRICS'
                    services='Dental Services'
                    icons={<LuClipboardPenLine size={35} color='#2490EB'/>
                    }
                />
            </div>
        </div>
    )
}

export default Facilities