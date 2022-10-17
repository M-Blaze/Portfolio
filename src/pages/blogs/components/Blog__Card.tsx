import React from 'react'
import Link from 'next/link'
import { Box, Flex, Heading } from '@chakra-ui/react'
import BlogOptions from './Blog__Options'
import { formatBlogDate } from 'helpers/date.helpers'

interface BlogCardProps {
  data: {
    id: number | string
    title: string
    createdAt: string
  }
}

const BlogCard: React.FC<BlogCardProps> = ({ data: { id, title, createdAt } }) => {
  return (
    <Box className="bg-gray-100 p-4 mb-4 rounded-md">
      <span className="text-sm">{formatBlogDate(createdAt)}</span>
      <Link href={`/blogs/${id}`} passHref>
        <div className="link-block cursor-pointer">
          <Heading as="h3" size="md" marginBottom="15px">
            {title}
          </Heading>
          <p>{title}</p>
        </div>
      </Link>
      <BlogOptions blogId={id} />
    </Box>
  )
}

export default BlogCard
