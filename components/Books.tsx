import React from 'react'
import BookCard from './BookCard'

type Props = {}

export default function Books({ }: Props) {
    return (
        <div className='flex flex-col justify-center items-center overflow-hidden max-w-7xl mx-auto px-10 mb-28 md:mb-48'>
            <h4 className='uppercase tracking-[10px] font-bold mb-14'>Books</h4>
            <div className='relative w-full flex overflow-x-scroll lg:overflow-auto items-center lg:grid grid-cols-3 snap-x snap-mandatory gap-10'>
                <BookCard
                    imgSrc='https://m.media-amazon.com/images/I/41IRZVZmgDL._AC_SY780_.jpg'
                    bookTitle='Deep Learning with Python'
                    review='This book offers a wealth of useful information about deep learning, particularly with the theories and calculations underlying networks built with Tensorflow. '
                    oneWord='Great Read !'
                />
                <BookCard
                    imgSrc='https://images-na.ssl-images-amazon.com/images/I/718i9gf0WaS.jpg'
                    bookTitle='Deep Learning: A Visual Approach'
                    review='To Andrew Glassner alone be all the credit. Complex topics are made simple to understand by the way he discusses and illustrates the concept using graphs. '
                    oneWord='Best book so far !'
                />
                <BookCard
                    imgSrc='https://e-library.siam.edu/wp-content/uploads/2021/10/Practical-DevOps-and-Cloud-Engineering.jpg'
                    bookTitle='Practical DevOps and Cloud Engineering'
                    review='It is a great book to start with in this field. I would recommend anyone from data field who want to study in DevOps field, to try this book. '
                    oneWord='Great book for beginner !'
                />
            </div>
        </div>
    )
}