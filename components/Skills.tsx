import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import MlSkill from './MlSkill'
import WebSkill from './WebSkill'
import Link from 'next/link'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row sm:px-10 lg:px-0 max-w-5xl mx-auto justify-between items-center gap-5 md:gap-10 mb-24 md:mb-48'>
            {/* <h4 className='md:hidden uppercase tracking-[10px] text-blue-400 font-bold'>Skills</h4> */}
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
                    duration: 0.7
                }}
                className='space-y-7 px-0 text-center md:text-left'>
                <h4 className='text-base font-semibold uppercase tracking-wider text-blue-400 hidden md:block'>Skill Set</h4>
                <h3 className='text-4xl md:text-5xl font-bold'>
                    Data,<br />Machine Learning <span className='text-blue-400'>&</span> <br /> Web Development
                </h3>
                <Link href="#project">
                    <a className='inline-block text-xs uppercase text-gray-400 tracking-widest py-3 border-b-2 cursor-pointer'>Examples of Projects</a>
                </Link>
            </motion.div>
            <div className='flex flex-col gap-7 mt-7 md:mt-0'>
                <Skill />
                <MlSkill />
                <WebSkill />
            </div>
        </div>
    )
}