import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'

import MainLayout from '../../layouts/MainLayout'
import About from './views/About'
import Banner from './views/Banner'
import Contacts from './views/Contacts'
import Projects from './views/Projects'
import Experience from './views/Experience'
import Skills from './views/Skills'

const Homepage: NextPage = () => {
  return (
    <MainLayout title="Home">
      <Banner />
      <Container maxW="container.lg">
        <About />
        <hr className="mb-5" />
        <Skills />
        <hr className="mb-5" />
        <Experience />
        <hr className="mb-5" />
        <Projects />
        <hr className="mb-5" />
        <Contacts />
      </Container>
    </MainLayout>
  )
}

export default Homepage
