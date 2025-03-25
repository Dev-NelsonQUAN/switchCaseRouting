import React from 'react'
import Title from '../ui/Title'
import OurTeamCards from './OurTeamCards'
import docsImg from '../../assets/side-view-doctor-walking-with-laptop.jpg'
import docimgTwo from '../../assets/black-nurse-their-workspace.jpg'
import docsImgThree from '../../assets/sectionDoctor.png'

const OurTeam = () => {
    return (
        <div className='px-34 bg-[#F4F6F9] pt-30'>
            <div className='flex flex-col items-center'>
                <div className='flex'>
                    <Title> OUR TEAM </Title>
                </div>

                <h2 className='mt-4 text-4xl'> Meet Our Heart Specialists </h2>
            </div>

            <div className='flex gap-6 mt-10 flex-wrap
            max-[769px]:justify-center
            '>
                <OurTeamCards
                    docsImage={docimgTwo}
                    docsName='Nelson Ade'
                    docsProfessions='Surgeon'
                />
                <OurTeamCards
                    docsImage={docsImg}
                    docsName='Mode Aice'
                    docsProfessions='Surgeon'
                />
                <OurTeamCards
                    docsImage={docsImgThree}
                    docsName='Ololade Uriel'
                    docsProfessions='Surgeon'
                />
            </div>
        </div>
    )
}

export default OurTeam