import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import BlogSearch from './BlogSearch'

const BlogSidebar = () => {
  return (
    <aside id="blog-sidebar" className="w-60 shadow-sm">
      <Box bgColor="white" className="sidebar-content" padding="15px 20px">
        <BlogSearch />
        <hr />
        <div className="list-holder py-4">
          <Heading as="h3" size="md" className="block-header">
            Popular Blogs
          </Heading>
          <ul className="blogs-list">
            <li>blog</li>
            <li>blog</li>
            <li>blog</li>
            <li>blog</li>
          </ul>
        </div>
        <hr />
        <div className="list-holder pt-4">
          <Heading as="h3" size="md" className="block-header">
            Latest Blogs
          </Heading>
          <ul className="blogs-list">
            <li>latest blog</li>
            <li>latest blog</li>
            <li>latest blog</li>
            <li>latest blog</li>
          </ul>
        </div>
      </Box>
    </aside>
  )
}

export default BlogSidebar
