import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-col text-center md:text-left sm:px-10 lg:px-0 md:flex-row max-w-5xl mx-auto justify-between items-center gap-5 md:gap-10 mb-20 md:mb-40'>
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
                    duration: 1.2
                }}
                className='space-y-7 px-0'>
                <h5 className='text-4xl md:text-5xl font-bold'>Background<br /><span className='text-blue-400'>&</span><br />Introduction</h5>
                <Link href="#workExp"><a className='text-xs uppercase text-gray-400 tracking-widest py-3 border-b-2 inline-block'>My Experiences</a></Link>
            </motion.div>
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
                    duration: 1.2
                }}
                className='max-w-xl px-10'>
                <p className='text-base leading-relaxed text-justify'>Punn Damrongratnuwong is my full name, but you can call me that too.
                    I'm a student at Chulalongkorn University right now, majoring in robotics and artificial intelligence in the engineering faculty.
                    I am a student who picks things up quickly and am capable of working both individually and in teams. I also want to get better as much as I can.
                    I'm interested in learning more about how data actually functions in practical settings. I'm interested in learning how the data coming from the actual production application is designed, built, and maintained.
                    Lastly, I want to apply my expertise and skills to this work in order to obtain the experience I could.</p>
            </motion.div>
        </div>
    )
}