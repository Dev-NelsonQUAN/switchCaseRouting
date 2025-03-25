import React from 'react'

const HeroBotCards = ({ background, iconLeft, iconRight,
    h1Txts, pTxts, dayOne, dayOneTM, iconBottom, number, Btn,
    dayTwo, dayTwoTM, dayThree, dayThreeTM, dayFour, dayFourTM
}) => {
    return (
        <div className={`${background} rounded-[5px] px-7 py-8 flex flex-col gap-4
        lg:w-106
        md:w-83
        
        `}>
            <div className='flex justify-between'>
                <div className='flex mt-6' >{iconLeft}</div>
                <div className='flex justify-self-start '>{iconRight}</div>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-4xl text-white
                md:text-2xl
                '> {h1Txts} </h1>
                <p className='
                lg:w-90  md:w-75
                text-s font-medium 
                text-white'
                > {pTxts} </p>
                <div>
                    <div className='flex justify-between px-2 text-white '>
                        <p>{dayOne} </p>
                        <p>{dayOneTM} </p>
                    </div>

                    <div className='flex justify-between px-2 text-white'>
                        <p>{dayTwo}</p>
                        <p>{dayTwoTM}</p>
                    </div>

                    <div className='flex justify-between px-2 text-white'>
                        <p>{dayThree}</p>
                        <p>{dayThreeTM}</p>
                    </div>

                    <div className='flex justify-between px-2 text-white '>
                        <p>{dayFour}</p>
                        <p>{dayFourTM}</p>
                    </div>
                </div>
                <div className='flex items-center gap3 text-white'>
                    {iconBottom}
                    {number}

                    <div className='flex'>
                        {Btn}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBotCards

// import React from 'react'

// const HeroBotCards = ({ background, iconLeft, iconRight,
//     h1Txts, pTxts, dayOne, dayOneTM, iconBottom, number, Btn,
//     dayTwo, dayTwoTM, dayThree, dayThreeTM, dayFour, dayFourTM
// }) => {
//     return (
//         <div className={`${background} rounded-[5px] px-7 py-8 flex flex-col gap-4
//         w-90
//         `}>
//             <div className='flex justify-between'>
//                 <div className='flex mt-6' >{iconLeft}</div>
//                 <div className='flex justify-self-start '>{iconRight}</div>
//             </div>

//             <div className='flex flex-col gap-4'>
//                 <h1 className='text-4xl text-white
//                 md:text-3xl
//                 '> {h1Txts} </h1>
//                 <p className='w-90 
//                 md:w-75
//                 text-s font-medium text-white'> {pTxts} </p>
//                 <div>
//                     <div className='flex justify-between px-2 text-white '>
//                         <p>{dayOne} </p>
//                         <p>{dayOneTM} </p>
//                     </div>

//                     <div className='flex justify-between px-2 text-white'>
//                         <p>{dayTwo}</p>
//                         <p>{dayTwoTM}</p>
//                     </div>

//                     <div className='flex justify-between px-2 text-white '>
//                         <p>{dayThree}</p>
//                         <p>{dayThreeTM}</p>
//                     </div>

//                     <div className='flex justify-between px-2 text-white '>
//                         <p>{dayFour}</p>
//                         <p>{dayFourTM}</p>
//                     </div>
//                 </div>
//                 <div className='flex items-center gap3 text-white'>
//                     {iconBottom}
//                     {number}

//                     <div className='pr-55'>
//                         {Btn}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default HeroBotCards