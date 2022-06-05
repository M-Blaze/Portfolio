import { Container, Box, Flex } from '@chakra-ui/react'
import React from 'react'

import BlogSidebar from './components/BlogSidebar'

const Blogs = () => {
  return (
    <Box className="blogs-wrapper" minH="100vh" bgColor="gray.200">
      <Container maxW="container.xl" className="blogs-content">
        <Flex>
          <div className="blogs flex-1"></div>
          <BlogSidebar />
        </Flex>
      </Container>
    </Box>
  )
}

export default Blogs
