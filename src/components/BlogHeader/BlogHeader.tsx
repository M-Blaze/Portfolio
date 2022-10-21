import React, { useRef } from 'react'
import { Container, Flex, Box } from '@chakra-ui/react'
import Link from 'next/link'

import Logo from '../Logo'
import BurgerMenu from '../BurgerMenu'

const BlogHeader = () => {
  const headerRef = useRef<HTMLHeadElement>(null)

  return (
    <header ref={headerRef} id="header" className="shadow-md sticky top-0 left-0 right-0 z-10 bg-white">
      <Container maxW="container.xl" className="bg-white">
        <Flex className="header-content justify-between items-center py-2">
          <Logo />
          <Box className="navbar-holder -translate-y-full bg-white left-0 right-0 pb-4 absolute transition-all -z-10 top-full border-2 border-white md:static md:z-10 md:translate-y-0 md:pb-0">
            <nav id="navbar">
              <ul className={'nav-list md:flex capitalize'}>
                <li className="px-3">
                  <Link href="/" passHref>
                    Home
                  </Link>
                </li>
                <li className="px-3">
                  <Link href="/blogs/add-blog" passHref>
                    Add Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </Box>
          <BurgerMenu headerRef={headerRef} />
        </Flex>
      </Container>
    </header>
  )
}

export default BlogHeader
