import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Books from '../components/Books'
import ContactMe from '../components/ContactMe'
import GetMe from '../components/GetMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(5,5,5)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='workExp' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='project' className='snap-center'>
        <Projects />
      </section>

      <section id='book' className='snap-center'>
        <Books />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-center border-b border-dark-gray'>
        <ContactMe />
      </section>

      <section id='getCloseMe' className='snap-center'>
        <GetMe />
      </section>
    </div>
  )
}

export default Home
