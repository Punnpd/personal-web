import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {SiTailwindcss, SiFirebase, SiFastapi} from 'react-icons/si'

type Props = {}

export default function WebSkill({ }: Props) {
    const iconCss = 'border rounded-full w-12 h-12 p-3 transition ease-in-out delay-100 hover:-translate-y-2 duration-300'
    return (
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
            className='max-w-sm text-left'>
            <h3 className='text-2xl font-semibold mb-2 tracking-wide'>Web Development</h3>
            <p className='text-sm text-gray-400 leading-relaxed mb-2'>
                Learning the various aspects of web development to produce stunning interfaces has always been a lot of fun.
            </p>
            <div className='flex gap-5'>
                <FaReact className={iconCss} size={'2em'} />
                <FaNodeJs className={iconCss} size={'2em'} />
                <SiTailwindcss className={iconCss} size={'2em'} />
                <SiFirebase className={iconCss} size={'2em'} />
                <SiFastapi className={iconCss} size={'2em'} />
            </div>
        </motion.div>
    )
}