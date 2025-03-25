import React, { useReducer } from 'react';
import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';
import Btn from '../ui/Btn'
import { BiPlus } from 'react-icons/bi';
import Title from '../ui/Title';
import CompLayout from '../../layout/CompLayout';




const Heropage = () => {

    return (
        <div className=' relative bg-cover bg-top 
        lg:h-170.5
        max-[769px]:h-135.5
        max-[575px]:h-170
        
        '
            style={{ backgroundImage: `url(${img})` }}
        >

            <div className='absolute inset-y-0 left-0 lg:w-1/2 
            bg-gradient-to-r from-white/90 to-transparent 
            lg:px-34 
            max-[769px]:w-120 
            max-[769px]:px-8
            flex items-center
            lg:pb-0
            max-[769px]:pb-20
            max-[575px]:w-full

            '>
                <CompLayout>
                    <div className='flex flex-col gap-4
                    max-[575px]:justy-s
                    ' >
                        <div className='flex'>
                            <Title> HIGHER LEVEL OF CARE </Title>
                        </div>

                        <h1 className='lg:text-6xl font-medium 
                    lg:leading-16
                    md:text-4xl
                    
                    '>
                            Setting Standards In Physiotherapy
                        </h1>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout</p>
                        <div className='flex'>
                            <Btn padding='10px 20px'> READ MORE <BiPlus /> </Btn>
                        </div>
                    </div>
                </CompLayout>
            </div>
        </div>
    );
};

export default Heropage;


// import React from 'react';
// import img from '../../assets/portrait-african-american-man-working-hospital-ward-desk.jpg';
// import Btn from '../ui/Btn'
// import { BiPlus } from 'react-icons/bi';
// import Title from '../ui/Title';

// const Heropage = () => {
//     return (
//         <div className=' relative bg-cover bg-top h-180
//             md:h-150
//         '
//             style= {{ backgroundImage: `url(${img})` }}
//         >

//             <div className='absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/90 to-transparent
//              md:w-120
//             px-34 md:px-14 flex items-center
//             '>
//                 <div className='flex flex-col gap-4' >
//                     <div className='flex'>
//                         <Title> HIGHER LEVEL OF CARE </Title>
//                     </div>

//                     <h1 className='text-6xl font-medium leading-16
//                     md:text-4xl
//                     md:leading-10
//                     '>
//                         Setting Standards In Physiotherapy
//                     </h1>
//                     <p
//                     className='text-[#666666]'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout</p>
//                     <div className='flex'>
//                         <Btn padding='10px 20px'> READ MORE <BiPlus /> </Btn>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Heropage;
