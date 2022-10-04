import React from 'react'
import { BiCoffeeTogo, BiCoffee } from 'react-icons/bi'
import { SiBuymeacoffee, SiRiotgames } from 'react-icons/si'
import {motion} from "framer-motion"

type Props = {}

export default function GetMe({ }: Props) {
    const clickHandler = () => {
        window.location.href = 'mailto:percent_pp@hotmail.com'
    }
    return (
        <div className='h-60 flex relative flex-col text-center md:flex-row max-w-7xl px-5 justify-center mx-auto items-center gap-5 md:justify-evenly'>
            <div className='flex flex-col space-y-1'>
                <a onClick={clickHandler} className='border-b cursor-pointer'>percent_pp@hotmail.com</a>
                <a className='underline'>(+66)81-884-3005</a>
            </div>
            <motion.div 
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
            className='flex gap-5 rounded-full'>
                <BiCoffeeTogo className='bg-white rounded-full w-12 h-12 p-3 transition ease-in-out delay-100 hover:-translate-y-2 duration-300' size={'2em'} color="black" />
                <BiCoffee className='bg-white rounded-full w-12 h-12 p-3 transition ease-in-out delay-100 hover:-translate-y-2 duration-300' size={'2em'} color="black" />
                <SiBuymeacoffee className='bg-white rounded-full w-12 h-12 p-3 transition ease-in-out delay-100 hover:-translate-y-2 duration-300' size={'2em'} color="black" />
                <SiRiotgames className='bg-white rounded-full w-12 h-12 p-3 transition ease-in-out delay-100 hover:-translate-y-2 duration-300' size={'2em'} color="black" />
            </motion.div>
        </div>
    )
}