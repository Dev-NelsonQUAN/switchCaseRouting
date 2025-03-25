import React from 'react'
import { CiMail } from "react-icons/ci";
import GlobalBtn from '../ui/GlobalBtn';
import Btn from '..//ui/Btn'
import footerLogo from '../../assets/footer_logo-2.png'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterest } from 'react-icons/fa';
import { RiArrowRightSLine } from "react-icons/ri";
import FooterCard from './FooterCard';
import imgs from '../../assets/happyFemaleDoc.jpg'
import { IoCall } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';


const Footer = () => {
    return (
        <div className='bg-[#14457B] lg:px-36 lg:py-28 
        max-[769px]:py-30 
        max-[769px]:px-30
        '>

            <footer className='flex lg:gap-10
            max-[769px]:gap-12
            max-[769px]:flex-wrap 
            max-[769px]:justify-center
            max-[575px]:gap-4
            '>
                <div>
                    <div className='w-45'>
                        <img
                            className='size-full object-cover'
                            src={footerLogo} alt="Footer Logo" />
                    </div>

                    <p className='w-75 text-white mt-8 text-[18px] font-medium'>
                        It helps designers plan out where the content will sit, the content to be written and approved
                    </p>

                    <div className='flex gap-4 mt-10'>
                        <div className='flex bg-[#2C5888] p-4 rounded-[5px]'>
                            <FaFacebookF className="text-white text-xl md:text-sm" />
                        </div>

                        <div className='bg-[#2C5888] p-4 rounded-[5px]'>
                            <FaGooglePlusG className="text-white text-2xl md:text-sm" />
                        </div>
                        <div className='bg-[#2C5888] p-4 rounded-[5px]'>
                            <FaInstagram className="text-white text-xl md:text-sm" />
                        </div>
                        <div className='bg-[#2C5888] p-4 rounded-[5px]'>
                            <FaPinterest className="text-white text-2xl md:text-sm" />

                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='text-white text-3xl'>Our Courses</h2>

                        <div className='
                            mt-8
                            text-white  
                                hover:text-[#2394EB]
                                flex gap-4
                                          max-[769px]:gap-14
                                          max-[575px]:gap-4
                        '>
                            <div className='flex flex-col 
                            lg:gap-4
                            max-[769px]:gap-4
                            max-[575px]:gap-4
                            '>
                                <p
                                    className='cursor-pointer
                            text-white  
                            hover:text-[#2394EB]
                            flex items-center
                            '
                                ><RiArrowRightSLine color='white' size={28} />
                                    {/* &gt;  */}
                                    About Us
                                </p>

                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Our Services
                                </p>

                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Doctors 1
                                </p>

                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Doctors 2
                                </p>

                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Events
                                </p>

                            </div>

                            <div className='flex flex-col gap-4'>
                                <p
                                    className='cursor-pointer text-white  
                                hover:text-[#2394EB] flex items-center '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Contact Us
                                </p>
                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Our Process
                                </p>
                                <p
                                    className='cursor-pointer
                                text-white  
                                hover:text-[#2394EB]
                                flex items-center
                                '
                                ><RiArrowRightSLine color='white' size={28} />
                                    FAQ
                                </p>
                                <p
                                    className='cursor-pointer
                            text-white  
                            hover:text-[#2394EB]
                            flex items-center
                            '
                                ><RiArrowRightSLine color='white' size={28} />
                                    Departments
                                </p>
                                <p
                                    className='cursor-pointer
                                   text-white  
                                   hover:text-[#2394EB]
                                   flex items-center
                                   '

                                ><RiArrowRightSLine color='white' size={28} />
                                    Member
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl text-white'> Recent Posts </h2>

                    <div className='flex flex-col gap-8 mt-8'>
                        <FooterCard img={imgs} calTXt='DECEMBER 12, 2025' postTxt='Get The Exercise Limited Mobility' />
                        <FooterCard img={imgs} calTXt='DECEMBER 12, 2025' postTxt='Get The Exercise Limited Mobility' />
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-white text-3xl
                        max-[769px]:flex
                        max-[769px]:align-center
                    '> Contact Us </h2>


                    <div className='mt-8'>
                        <p className='flex text-white items-center gap-6
                        font-medium text-[17px]
                        '> <IoCall 
                            className='max-[769px]:size-[20px]'
                            /> +234 90567483 </p>
                        <p className='flex text-white items-center gap-6
                        my-6 font-medium text-[17px]
                        '> <CiMail 
                        className='max-[769px]:size-[23px]'
                        
                        /> info@nelsonthemes.com </p>
                        <p className='flex text-white items-center gap-6
                        lg:w-90 font-medium text-[17px] leading-8
                        max-[769px]:w-65
                        '> <GoLocation 
                        
                        className='max-[769px]:size-[32px]'
                        /> NelsonThemes, 23, Devs Street. Ladey Avenue, Boston, NY.   </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer