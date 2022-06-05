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
          <Heading as="h3" size="sm" className="block-header">
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
        <div className="list-holder py-4">
          <Heading as="h3" size="sm" className="block-header">
            Latest Blogs
          </Heading>
          <ul className="blogs-list">
            <li>latest blog</li>
            <li>latest blog</li>
            <li>latest blog</li>
            <li>latest blog</li>
          </ul>
        </div>
        <hr />
        <div className="list-holder pt-4">
          <Heading as="h3" size="sm" className="block-header">
            Programming languages
          </Heading>
          <ul className="blogs-list">
            <li>React</li>
            <li>Vue</li>
            <li>Typescript</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </Box>
    </aside>
  )
}

export default BlogSidebar
