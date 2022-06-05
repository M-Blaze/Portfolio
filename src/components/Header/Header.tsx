import { Container, Flex, Spacer, Box } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.scss'

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
          <Link href="/" passHref>
            <div className="logo cursor-pointer flex items-center">
              <Image src="/images/logo.svg" alt="M" layout="intrinsic" width="45px" height="45px" />
            </div>
          </Link>
          <Spacer />
          <Box>
            <nav id="navbar">
              <ul className={navlistClasses}>
                <li>
                  <a href="#about-me">about me</a>
                </li>
                <li>
                  <a href="#skills">skills</a>
                </li>
                <li>
                  <a href="#experience">experience</a>
                </li>
                <li>
                  <a href="#projects">projects</a>
                </li>
                <li>
                  <a href="#contact">contacts</a>
                </li>
                <li>
                  <Link href="/blogs" passHref>
                    <span
                      className="bg-red-500 text-white rounded-full pt-1 pb-2 px-5 cursor-pointer"
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
