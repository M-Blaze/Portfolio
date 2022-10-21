import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'

import useHeader from '../../../hooks/useHeader'
import BlogSearch from './BlogSearch'

const BlogSidebar = () => {
  const [headerHeight] = useHeader()

  return (
    <aside id="blog-sidebar" className="w-full md:w-60 mb-8">
      <Box
        bgColor="white"
        className="sidebar-content md:sticky shadow-lg"
        style={{ top: `${(headerHeight || 0) + 15}px` }}
        padding="15px 20px"
      >
        <BlogSearch />
        <hr />
        <div className="list-holder py-4">
          <Heading as="h3" size="sm" className="block-header">
            Popular Blogs
          </Heading>
          <ul className="blogs-list">
            <li>
              <Link href={'/'}>blog</Link>
            </li>
            <li>
              <Link href={'/'}>blog</Link>
            </li>
            <li>
              <Link href={'/'}>blog</Link>
            </li>
            <li>
              <Link href={'/'}>blog</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="list-holder py-4">
          <Heading as="h3" size="sm" className="block-header">
            Latest Blogs
          </Heading>
          <ul className="blogs-list">
            <li>
              <Link href={'/'}>latest blog</Link>
            </li>
            <li>
              <Link href={'/'}>latest blog</Link>
            </li>
            <li>
              <Link href={'/'}>latest blog</Link>
            </li>
            <li>
              <Link href={'/'}>latest blog</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="list-holder pt-4">
          <Heading as="h3" size="sm" className="block-header">
            Programming languages
          </Heading>
          <ul className="blogs-list">
            <li>
              <Link href={{ pathname: '/blogs', query: { q: 'react' } }}>React</Link>
            </li>
            <li>
              <Link href={{ pathname: '/blogs', query: { q: 'vue' } }}>Vue</Link>
            </li>
            <li>
              <Link href={{ pathname: '/blogs', query: { q: 'typescript' } }}>Typescript</Link>
            </li>
            <li>
              <Link href={{ pathname: '/blogs', query: { q: 'mongodb' } }}>MongoDB</Link>
            </li>
          </ul>
        </div>
      </Box>
    </aside>
  )
}

export default BlogSidebar
