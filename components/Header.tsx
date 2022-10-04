import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
    const clickHandler = () => {
        window.location.href = 'mailto:percent_pp@hotmail.com'
    }
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                }}
                className='flex flex-row items-center'>
                {/* Social Icon */}
                <SocialIcon
                    url='https://www.linkedin.com/in/punn-damrongratnuwong-b4a56b219/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.instagram.com/punndam/'
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/Punnpd'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer gap-3'>
                <SocialIcon
                    onClick={clickHandler}
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
        </header>
    )
}