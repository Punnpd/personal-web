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
    <div className='bg-[rgb(5,5,5)] text-white h-screen overflow-scroll z-0 scroll-smooth'>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      {/* About */}
      <section id='about'>
        <About />
      </section>

      {/* Skills */}
      <section id='skills'>
        <Skills />
      </section>

      {/* Experience */}
      <section id='workExp'>
        <WorkExperience />
      </section>

      {/* Projects */}
      <section id='project'>
        <Projects />
      </section>

      <section id='book'>
        <Books />
      </section>

      {/* Contact Me */}
      <section id='contact' className='border-b border-dark-gray'>
        <ContactMe />
      </section>

      <section id='getCloseMe'>
        <GetMe />
      </section>
    </div>
  )
}

export default Home
