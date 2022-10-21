import React from 'react'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'
import BlogOptions from './BlogOptions'
import { formatBlogDate } from 'helpers/date.helpers'

interface BlogCardProps {
  data: {
    id: number | string
    title: string
    createdAt: string
    likes: number
  }
}

const BlogCard: React.FC<BlogCardProps> = ({ data: { id, title, createdAt, likes } }) => {
  return (
    <Box className="bg-gray-100 p-4 mb-4 rounded-md">
      <span className="text-sm">{formatBlogDate(createdAt)}</span>
      <Link href={`/blogs/${id}`} passHref>
        <div className="link-block cursor-pointer mb-4">
          <Heading as="h3" size="md" marginBottom="15px">
            {title}
          </Heading>
          <p>{title}</p>
        </div>
      </Link>
      <BlogOptions likes={likes} blogId={id} />
    </Box>
  )
}

export default BlogCard
