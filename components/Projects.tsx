import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

export default function Projects({}: Props) {
  return (
    <div className='flex flex-col h-screen relative justify-center items-center overflow-hidden max-w-7xl mx-auto px-10'>
        <h4 className='absolute top-24 uppercase tracking-[10px] font-bold md:hidden'>Projects +</h4>
        <h3 className='hidden md:block font-bold text-6xl mb-7'>Projects +</h3>
        <div className='w-full flex overflow-x-scroll items-center md:grid grid-cols-3 snap-x snap-mandatory gap-5'>
            <ProjectCard 
            projectName='Occupancy Detection'
            description='(Environment sensor based) CO2 concentration to detect presence which is tested and validated for office buildings and hotels'
            link='https://docs.google.com/presentation/d/1Ag8y6ne4i_Z5ePhdnkN6sCX9OgYoWm3_BPe57Hsum0w/edit?usp=sharing'
            />
            <ProjectCard 
            projectName='Condo Price Prediction'
            description='Create all the key features that are necessary to predict condo prices in Rayong and Songkhla using the Google API and insight'
            link='https://docs.google.com/presentation/d/18QXvaAHj5RdDsDYxFdbZl3DmpNYR5_IBVtPR6IMyFjg/edit?usp=sharing'
            />
            <ProjectCard 
            projectName='Food Recommendation App'
            description="Line chatbot that recommends and controls the user's daily consumed nutrition to choose what is best for the user."
            link='/'
            />
            <ProjectCard 
            projectName='Social Distancing System'
            description='To prevent unnecessary spread of COVID-19, the creation of a system utilizing computer vision was something we decided to do.'
            link='https://www.youtube.com/watch?v=iKtt75fXGhc'
            />
            <ProjectCard 
            projectName='Emotion Recognition'
            description='Emotion recognition is the process of identifying human emotion. People vary widely in their accuracy at recognizing the emotions of others.'
            link='https://docs.google.com/presentation/d/1I5eWRsnESmuGpkAbJLx5b6oXCKCElNbFAQKxTtabtzE/edit?usp=sharing'
            />
            <ProjectCard 
            projectName='Productivity Dashboard'
            description="Dashboard that displays each factory's manufacturing lines' productivity and efficiency. The dashboard was created by Plotly and Dash"
            link='https://drive.google.com/file/d/1NEf4cFa40Xmm8yUjnsRdmU-ecdb704nd/view?usp=sharing'
            />
        </div>
    </div>
  )
}