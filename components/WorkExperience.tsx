import React from 'react'
import ExpCard from './ExpCard'

type Props = {}

export default function WorkExperience({ }: Props) {
    return (
        <div
            className='h-screen flex flex-col relative justify-center items-center overflow-hidden max-w-7xl mx-auto px-10 '>
            <h4 className='absolute top-24 uppercase tracking-[10px] font-bold md:hidden'>Experience</h4>
            <h3 className='hidden md:block font-bold text-6xl text-left w-10/12 mb-7'>Experience</h3>
            <div className='w-full flex overflow-x-scroll items-center md:grid grid-cols-2 gap-y-5 snap-x snap-mandatory'>
                <ExpCard
                    imgSrc='https://altotech.net/assets/images/logoaltotech-3-96x109.png'
                    companyName='Altotech'
                    position='Machine Learning Engineer Intern'
                    duration='Aug 2022 - Present'
                    imgConfig='w-14 h-16'
                    description='Deploy at scale to edge device (Jetson Nano) using Azure IoT Edge, and a system to monitor model/software versioning for edge device'
                />
                <ExpCard
                    imgSrc='https://upload.wikimedia.org/wikipedia/commons/c/ce/Agoda_transparent_logo.png'
                    companyName='Agoda'
                    position='Partner Program Intern'
                    duration='June 2022 - July 2022'
                    imgConfig='w-24 h-16'
                    description='Manage and maintain daily operational activities of Agoda Intelligence program, and use analytical skill to develop scalable system for internal use.'
                />
                <ExpCard
                    imgSrc='https://altotech.net/assets/images/logoaltotech-3-96x109.png'
                    companyName='Altotech'
                    position='Data Scientist Intern'
                    duration='Feb 2022 - May 2022'
                    imgConfig='w-14 h-16'
                    description='Mine and analyze data from databases to drive optimization and improvement of products, and develop data models to apply to datasets'
                />
                <ExpCard
                    imgSrc='https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png'
                    companyName='Accenture'
                    position='Technical Consultant Intern'
                    duration='June 2021 - Aug 2021'
                    imgConfig='w-14 h-16'
                    description='Validate all the processes including business and integration, and plan test approach for accounting and report in the core banking system.'
                />

            </div>
        </div>
    )
}