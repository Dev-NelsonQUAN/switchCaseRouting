import React from 'react'


const FacilitiesCard = ({facilitiesImg, medical, services, icons}) => {
    return (
        <div className='bg-[#F4F6F9] lg:p-7 lg:py-5 rounded-2xl
        lg:w-100 flex flex-col items-center md:p-5  md:w-80
        ' >
            <div className='lg:w-90 lg:h-95 md:w-70 md:h-80'>
                <img  
                className='size-full object-cover rounded-[5px]'
                src={facilitiesImg} alt="Health Images" />
            </div>

            <div className='flex justify-between items-center w-full mt-6

            '>
                <div>
                    <p className='text-s font-medium text-[#2490EB]'>{medical}</p>
                    <p className='lg:text-3xl mt-2 md:text-2xl'>{services}</p>
                </div>

                <div>
                    {icons}
                </div>
            </div>
        </div>
    )
}

export default FacilitiesCard
