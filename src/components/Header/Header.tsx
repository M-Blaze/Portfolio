import { Container, Flex, Spacer, Box } from '@chakra-ui/react'
import classNames from 'classnames'
import Link from 'next/link'
import { Link as ReactScrollLink } from 'react-scroll'

import styles from './Header.module.scss'
import Logo from '../Logo'
const Header = () => {
  const navlistClasses = classNames('navlist', styles.navList)

  return (
    <header
      id="header"
      style={{ position: 'sticky', top: 0, left: 0, right: 0, background: '#fff', zIndex: 10 }}
      className="shadow-md"
    >
      <Container maxW="container.xl">
        <Flex alignItems="center" padding="15px 0">
          <Logo />
          <Spacer />
          <Box>
            <nav id="navbar">
              <ul className={navlistClasses}>
                <li>
                  <ReactScrollLink
                    activeClass="active"
                    className="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    about me
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                    skills
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink activeClass="active" to="experience" spy={true} smooth={true} duration={500}>
                    experience
                  </ReactScrollLink>
                </li>
                <li>
                  <ReactScrollLink activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                    projects
                  </ReactScrollLink>
                </li>
                <li>
                  <Link href="/blogs/add-blog" passHref>
                    <span
                      className="bg-primary text-white rounded-full pt-1 pb-2 px-5 cursor-pointer"
                      style={{ lineHeight: '0' }}
                    >
                      Add blog
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" passHref>
                    <span
                      className="bg-primary text-white rounded-full pt-1 pb-2 px-5 cursor-pointer"
                      style={{ lineHeight: '0' }}
                    >
                      Blogs
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </Box>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
