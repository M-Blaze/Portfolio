import { Container, Box, Flex } from '@chakra-ui/react'
import React from 'react'

import BlogLayout from '../../layouts/BlogLayout'
import BlogSidebar from './components/BlogSidebar'
import BlogsDisplay from './components/BlogsDisplay'
import { BlogProvider } from 'src/contexts/blog-context/blog.provider'

const Blogs = () => {
  return (
    <BlogLayout title="Blogs">
      <BlogProvider>
        <Box className="blogs-wrapper pt-4" minH="100vh">
          <Container maxW="container.xl" className="blogs-content">
            <Flex>
              <BlogsDisplay />
              <BlogSidebar />
            </Flex>
          </Container>
        </Box>
      </BlogProvider>
    </BlogLayout>
  )
}

export default Blogs
