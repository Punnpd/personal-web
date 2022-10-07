import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {
    projectName: string;
    description: string;
    link: string;
}

export default function ProjectCard({ projectName, description, link }: Props) {
    return (
        <div
            className='flex flex-col items-center justify-center md:max-w-sm md:max-h-60 snap-center p-5 border border-l-4 border-dark-gray hover:border-l-zinc-600 delay-50 transition ease-in-out duration-300'>
            <div className='my-2'>
                <h5 className='text-2xl font-bold tracking-wide'>{projectName}</h5>
                <p className='text-sm text-gray-500 max-w-sm py-2 leading-relaxed'>{description}</p>
                <Link href={link}>
                    <a className='text-xs uppercase text-blue-400 tracking-widest py-3 border-b-2 inline-block cursor-pointer'>Read more</a>
                </Link>
            </div>
        </div>
    )
}