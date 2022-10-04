import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Student.", "Coffee Guy."],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col items-center justify-center p-10 gap-5 text-center md:flex-row max-w-5xl mx-auto overflow-hidden'>
            <div className='flex flex-col gap-5 text-left'>
                {/* Support Header */}
                <h2 className='text-sm uppercase text-gray-300 tracking-[7px]'>Punn Damrongratnuwong</h2>
                {/* Main Header */}
                <h1 className='font-bold text-4xl md:text-5xl'>
                    Hi,
                    I'm
                    <br />
                    <span className='text-blue-400'>Punn</span> Damrongratnuwong<span className='font-bold text-blue-500'>.</span>
                    <br />
                    <span>Now, I'm a {text}</span>
                    <Cursor cursorColor='white' />
                </h1>
                <Link href="#about"><a className='text-xs uppercase text-gray-400 tracking-widest py-3 border-b-2 inline-block cursor-pointer'>Scroll for more</a></Link>
            </div>
            {/* Profile Image */}
            <img
                className='relative rounded-full h-64 w-64 mx-auto my-5'
                src="https://media-exp1.licdn.com/dms/image/C4E03AQG5K8qPqAi89w/profile-displayphoto-shrink_400_400/0/1637865639668?e=1669852800&v=beta&t=uGy640i9CvZ36eIlFWpEhdF5H5l9HkCfV5Ur1bOI94I" alt="Profile Image"
            />
        </div>
    )
}