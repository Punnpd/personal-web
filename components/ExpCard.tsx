import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    imgSrc: string;
    companyName: string;
    position: string;
    duration: string;
    imgConfig: string;
    description: string;
}

export default function ExpCard({ imgSrc, companyName, position, duration, imgConfig, description }: Props) {
    return (
        <motion.article
            initial={{
                x: -100,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 1
            }}
            // flex-shrink-0 w-full 
            className='flex flex-col items-center justify-center w-full'>
            <div className='flex flex-col'>
                <img
                    className={`${imgConfig} object-cover object-center`}
                    src={imgSrc} alt="Career Logo"
                />

                <div className='my-2'>
                    <h5 className='font-bold text-2xl tracking-wide'>{companyName}</h5>
                    <p className='font-light'>{position}</p>
                    <p className='text-gray-500 font-extralight py-2'>{duration}</p>
                    <p className='text-sm text-gray-500 font-extralight py-2 max-w-sm'>{description}</p>
                </div>
            </div>
        </motion.article>
    )
}