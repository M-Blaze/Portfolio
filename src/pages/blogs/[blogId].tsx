import React from 'react'
import { Box, Heading, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { blogData } from '../api/static_data'
import MainLayout from 'src/layouts/MainLayout'

const Blog = () => {
  const router = useRouter()
  const { blogId } = router.query
  const blog = blogData.find((item) => `${item.id}` === blogId)

  return (
    <MainLayout title={`${blog?.title}`}>
      <Container maxW="container.xl" className="blogs-content">
        <Box className="bg-gray-100 p-4 mb-4 rounded-md">
          <Heading as="h3" size="md" marginBottom="15px">
            {blog?.title}
          </Heading>
          <p>{blog?.title}</p>
          <strong>{blog?.createdAt}</strong> share options
        </Box>
      </Container>
    </MainLayout>
  )
}

export default Blog
