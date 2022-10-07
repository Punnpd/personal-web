import React from 'react'
// import Image from "next/image"
// import Image1 from "../public/IMG_4613.jpg"
import { motion } from "framer-motion"

type Props = {}

export default function ContactMe({ }: Props) {
    return (
        <div className='flex flex-col max-w-7xl px-5 justify-center mx-auto items-center mb-20 md:mb-40'>
            <h4 className='uppercase tracking-[10px] font-bold mb-14 md:mb-20'>Hackathon Winner</h4>
            <div className='flex flex-col lg:flex-row justify-evenly w-full items-center gap-10 md:gap-10'>
                <div
                    className='h-[23rem] w-[23rem] md:h-[40rem] md:w-[40rem] relative group'>
                    <img
                        className='hover:opacity-80 delay-50 transition ease-in-out duration-300 rounded-sm'
                        src='https://i.postimg.cc/0y97GsPm/IMG-4613.jpg' alt="densoImg"
                    />
                </div>
                <motion.div
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <h5 className='text-2xl font-bold tracking-wide'>Denso Open Innovation Hackathon</h5>
                    <p className='text-gray-500 font-extralight'>1st Place Winner</p>
                    <p className='text-sm text-gray-500 max-w-[450px] py-2 leading-relaxed'>Develop the web-based system to ensure and maintain the efficiency of the factory after any configurations using Digital twin, and design business model to solve pain points in manufacturing industry.</p>
                </motion.div>
            </div>
        </div>
    )
}