import { Container, Box, Flex } from '@chakra-ui/react'
import React from 'react'

import MainLayout from '../../layouts/MainLayout'
import BlogSidebar from './components/BlogSidebar'
import BlogCard from './components/Blog__Card'

import { blogData } from '../api/static_data'

const Blogs = () => {
  return (
    <MainLayout title="Blogs">
      <Box className="blogs-wrapper pt-4" minH="100vh">
        <Container maxW="container.xl" className="blogs-content">
          <Flex>
            <div className="blogs flex-1 mr-4">
              {blogData.map((item) => (
                <BlogCard data={item} key={item.id} />
              ))}
            </div>
            <BlogSidebar />
          </Flex>
        </Container>
      </Box>
    </MainLayout>
  )
}

export default Blogs
