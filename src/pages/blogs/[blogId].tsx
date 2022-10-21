import React from 'react'
import { Heading, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { blogs } from '../api/static_data'
import BlogLayout from 'src/layouts/BlogLayout'
import { formatBlogDate } from 'helpers/date.helpers'

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
  const { title, createdAt, likes, id }: BlogCardProps = blogs.find((item) => `${item.id}` === blogId) || templateBlog

  return (
    <BlogLayout title={`${title}`}>
      <Container maxW="container.xl" className="blogs-content">
        <span className="text-sm">{formatBlogDate(createdAt)}</span>
        <Heading as="h3" size="md" marginBottom="15px">
          {title}
        </Heading>
        <p>
          {title}
          {title}
          {title}
          {title}
          {title}
        </p>
      </Container>
    </BlogLayout>
  )
}

export default Blog
