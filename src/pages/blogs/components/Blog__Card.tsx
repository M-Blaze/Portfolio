import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'

interface BlogCardProps {
  data: {
    id: number
    title: string
    createdAt: string
  }
}

const BlogCard: React.FC<BlogCardProps> = ({ data: { id, title, createdAt } }) => {
  return (
    <Link href={`/blogs/${id}`} passHref>
      <Box className="cursor-pointer bg-gray-100 p-4 mb-4 rounded-md">
        <Heading as="h3" size="md" marginBottom="15px">
          {title}
        </Heading>
        <p>{title}</p>
        <strong>{createdAt}</strong> share options
      </Box>
    </Link>
  )
}

export default BlogCard
