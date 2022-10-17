import React from 'react'
import { Box, Heading, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { blogData } from '../api/static_data'
import MainLayout from 'src/layouts/MainLayout'
import { formatBlogDate } from 'helpers/date.helpers'
import BlogOptions from './components/Blog__Options'

interface BlogCardProps {
  id: number | string
  title: string
  createdAt: string
  likes: number
}

const templateBlog = {
  id: 0,
  title: 'Untitled',
  createdAt: '2020-20-02',
  likes: 0
}
const Blog = () => {
  const router = useRouter()
  const { blogId } = router.query
  const { title, createdAt, likes, id }: BlogCardProps =
    blogData.find((item) => `${item.id}` === blogId) || templateBlog

  return (
    <MainLayout title={`${title}`}>
      <Container maxW="container.xl" className="blogs-content">
        <Box className="bg-gray-100 p-4 mb-4 rounded-md">
          <span className="text-sm">{formatBlogDate(createdAt)}</span>
          <Heading as="h3" size="md" marginBottom="15px">
            {title}
          </Heading>
          <p>{title}</p>
          <BlogOptions likes={likes} blogId={id} />
        </Box>
      </Container>
    </MainLayout>
  )
}

export default Blog
