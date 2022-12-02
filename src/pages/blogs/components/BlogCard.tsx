import React from 'react'
import Link from 'next/link'
import { Box, Heading, Tag, TagLabel } from '@chakra-ui/react'

import BlogOptions from './BlogOptions'
import { formatBlogDate } from 'helpers/date.helpers'

interface BlogCardProps {
  data: {
    id: number | string
    title: string
    tags: string[]
    createdAt: string
    likes: number
  }
}

const BlogCard: React.FC<BlogCardProps> = ({ data: { id, title, createdAt, likes, tags } }) => {
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
      <div className="flex justify-between items-center">
        <div className="tags-wrapper">
          {tags.map((tag) => (
            <Tag
              size="sm"
              key={tag}
              borderRadius="full"
              variant="solid"
              marginRight="2"
              marginY="2"
              colorScheme="green"
              className="capitalize"
            >
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
        </div>
        <BlogOptions likes={likes} blogId={id} />
      </div>
    </Box>
  )
}

export default BlogCard
