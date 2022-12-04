import React, { useRef } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
// import Link from 'next/link'
import { Link as ReactScrollLink } from 'react-scroll'

import Logo from '../Logo'
import BurgerMenu from '../BurgerMenu'

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null)

  return (
    <header ref={headerRef} id="header" className="shadow-md sticky top-0 left-0 right-0 z-10 bg-white">
      <Container maxW="container.xl" className="bg-white">
        <Flex className="header-content justify-between items-center py-2">
          <Logo />
          <Box className="navbar-holder -translate-y-full bg-white left-0 right-0 absolute transition-all -z-10 top-full border-2 border-white md:static md:z-10 md:translate-y-0">
            <nav id="navbar">
              <ul className={'nav-list md:flex capitalize'}>
                <li className="px-3">
                  <ReactScrollLink
                    activeClass="active"
                    className="active block cursor-pointer hover:text-primary"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    about me
                  </ReactScrollLink>
                </li>
                <li className="px-3">
                  <ReactScrollLink
                    activeClass="active"
                    className="block cursor-pointer hover:text-primary"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    skills
                  </ReactScrollLink>
                </li>
                <li className="px-3">
                  <ReactScrollLink
                    activeClass="active"
                    className="block cursor-pointer hover:text-primary"
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    experience
                  </ReactScrollLink>
                </li>
                <li className="mb-2 md:mb-0 px-3">
                  <ReactScrollLink
                    activeClass="active"
                    className="block cursor-pointer hover:text-primary"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    projects
                  </ReactScrollLink>
                </li>
                {/* <li className="px-3">
                  <Link href="/blogs" passHref>
                    <span className="bg-primary text-white rounded-full py-1 px-5 mx-3 cursor-pointer">Blogs</span hover:text-primary>
                  </Link>
                </li> */}
              </ul>
            </nav>
          </Box>
          <BurgerMenu headerRef={headerRef} />
        </Flex>
      </Container>
    </header>
  )
}

export default Header
