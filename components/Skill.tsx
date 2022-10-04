import React from 'react'
import { motion } from 'framer-motion'
import { FaPython } from 'react-icons/fa'
import { SiMysql, SiTableau, SiPlotly } from 'react-icons/si'
import { DiScala } from 'react-icons/di'

type Props = {}

export default function Skill({ }: Props) {
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
            <h3 className='text-2xl font-semibold mb-2 tracking-wide'>Data</h3>
            <p className='text-sm text-gray-400 leading-relaxed mb-2'>
                    I specialize in analyzing and visualizing data using various tools with in-depth knowledge.
                </p>
            <div className='flex gap-5'>
                <FaPython className={iconCss} size={'2em'} />
                <SiMysql className={iconCss} size={'2em'} />
                <DiScala className={iconCss} size={'2em'} />
                <SiTableau className={iconCss} size={'2em'} />
                <SiPlotly className={iconCss} size={'2em'} />
            </div>
        </motion.div>
    )
}