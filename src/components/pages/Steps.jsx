import React from 'react'
import Title from '../ui/Title'
import GlobalBtn from '../ui/GlobalBtn'
import StepCard from './StepCard'
import img from '../../assets/front-view-black-nurses-work.jpg'
import imgTwo from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg'
import imgThree from '../../assets/happyFemaleDoc.jpg'
import imgFour from '../../assets/sectionDoctor.png'
import { FaPlus } from 'react-icons/fa'
import Btn from '../ui/Btn'

const Steps = () => {
    return (
        <div className='px-30 pb-20'>
            <div className='flex items-center flex-col'>
                <div>
                    <Title> OUR STEP </Title>
                </div>

                <h1 className='lg:mt-8 lg:text-5xl font-medium 
                max-[769px]:text-3xl max-[769px]:mt-6'> Our Working Best Proceess </h1>
            </div>

            <div className='flex flex-wrap lg:justify-between mt-20 mb-20
             max-[769px]:justify-center max-[769px]:gap-8
            '>
                <StepCard imgss={img} roundedInTxt='01'
                    emregTxt='Emergency Care'
                    emergP="Health is vital, and emergencies shouldn't be overlooked, and we prioritize that."
                />
                <StepCard imgss={imgTwo} roundedInTxt='02'
                    emregTxt='Emergency Care'
                    emergP="Health is vital, and emergencies shouldn't be overlooked, and we prioritize that."

                />
                <StepCard imgss={imgThree} roundedInTxt='03'
                    emregTxt='Emergency Care'
                    emergP="Health is vital, and emergencies shouldn't be overlooked, and we prioritize that."

                />
                <StepCard imgss={imgFour} roundedInTxt='04'
                    emregTxt='Emergency Care'
                    emergP="Health is vital, and emergencies shouldn't be overlooked, and we prioritize that."
                />
            </div>

            <div className='flex justify-center'>
                {/* <GlobalBtn textBtn='READ MORE' iconBtn={<FaPlus color='white' />} 
                /> */}

                <Btn> GET APPOINTMENT <FaPlus color='white' /> </Btn>
            </div>
        </div>
    )
}

export default Steps