import React from 'react'

type Props = {
    imgSrc: string;
    bookTitle: string;
    review: string;
    oneWord: string;
}

export default function BookCard({ imgSrc, bookTitle, review, oneWord }: Props) {
    return (
        <div className='flex flex-col items-center justify-center flex-shrink-0 w-full sm:max-w-sm snap-center rounded-md p-5 group'>
            <div className='relative'>
                <img
                    className='w-96 h-[480px] opacity-60 object-cover object-center group-hover:scale-105 group-hover:opacity-100 delay-50 transition ease-in-out duration-300'
                    src={imgSrc}
                    alt=""
                />
                <h4 className='absolute bottom-20 md:bottom-24 left-3 text-xl tracking-tight font-serif group-hover:hidden'>{bookTitle}</h4>
                <h5 className='absolute bottom-4 left-3 text-xs font-normal tracking-wide group-hover:hidden'>{review}<strong>{oneWord}</strong></h5>
            </div>
        </div>
    )
}