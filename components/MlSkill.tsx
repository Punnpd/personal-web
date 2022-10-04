import React from 'react'
import { motion } from 'framer-motion'
import { FaPython, FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiKeras, SiPytorch, SiMicrosoftazure } from 'react-icons/si'

type Props = {}

export default function MlSkill({ }: Props) {
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
            <h3 className='text-2xl font-semibold mb-2 tracking-wide'>Machine Learning</h3>
            <p className='text-sm text-gray-400 leading-relaxed mb-2'>
                I've always had a strong enthusiasm for machine learning and consider it to be my area of expertise.
            </p>
            <div className='flex gap-5'>
                <FaPython className={iconCss} size={'2em'} />
                <SiTensorflow className={iconCss} size={'2em'} />
                <SiPytorch className={iconCss} size={'2em'} />
                <FaDocker className={iconCss} size={'2em'} />
                <SiMicrosoftazure className={iconCss} size={'2em'} />
            </div>
        </motion.div>
    )
}