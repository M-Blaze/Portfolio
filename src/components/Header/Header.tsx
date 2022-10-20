import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import classNames from 'classnames'
import Link from 'next/link'
import { Link as ReactScrollLink } from 'react-scroll'

import Logo from '../Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navlistClasses = classNames('navlist')
  const headerRef = useRef<HTMLHeadElement>(null)
  const navbarHolder = useMemo(() => {
    return classNames(
      'navbar-holder bg-white left-0 right-0 pb-4 absolute transition-all -z-10 top-full border-2 border-white',
      isMenuOpen ? 'translate-y-0' : '-translate-y-full'
    )
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  const hideOnClickOutside = useCallback((event: MouseEvent) => {
    if (!headerRef.current?.contains(event.target as Node)) {
      setIsMenuOpen((isOpen) => !isOpen)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-active')
      document.body.addEventListener('click', hideOnClickOutside)
    } else {
      document.body.classList.remove('nav-active')
      document.body.removeEventListener('click', hideOnClickOutside)
    }

    return () => {
      document.body.removeEventListener('click', hideOnClickOutside)
    }
  }, [isMenuOpen, hideOnClickOutside])

  return (
    <header ref={headerRef} id="header" className="shadow-md sticky top-0 left-0 right-0 z-10 bg-white">
      <Container maxW="container.xl" className="bg-white">
        <Flex className="header-content justify-between items-center py-2">
          <Logo />
          <Box className={navbarHolder}>
            <nav id="navbar">
              <ul className={navlistClasses}>
                <li>
                  <ReactScrollLink
                    activeClass="active"
                    className="active px-3 block"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    about me
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink
                    activeClass="active"
                    className="px-3 block"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    skills
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink
                    activeClass="active"
                    className="px-3 block"
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    experience
                  </ReactScrollLink>
                </li>
                <li className="mb-2">
                  <ReactScrollLink
                    activeClass="active"
                    className="px-3 block"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    projects
                  </ReactScrollLink>
                </li>
                <li>
                  <Link href="/blogs/add-blog" passHref>
                    <span className="bg-primary text-white rounded-full py-1 px-5 cursor-pointer mx-3">Add blog</span>
                  </Link>
                  <Link href="/blogs" passHref>
                    <span className="bg-primary text-white rounded-full py-1 px-5 cursor-pointer">Blogs</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </Box>
          <div className="hamburger-menu w-7 h-5 relative" onClick={toggleMenu}>
            <div className="menu-item"></div>
            <div className="menu-item"></div>
            <div className="menu-item"></div>
          </div>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
