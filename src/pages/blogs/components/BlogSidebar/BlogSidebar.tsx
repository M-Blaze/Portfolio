import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'

import styles from './BlogSidebar.module.scss'
import useHeader from '../../../../hooks/useHeader'
import BlogSearch from './components/BlogSearch'

const tags = ['react', 'vue', 'typescript', 'mongodb']
const blogs = [
  {
    id: 1,
    title: 'Ultrasonography of Left Ovary using Other Contrast'
  },
  {
    id: 2,
    title: 'Removal of Synthetic Substitute from Left Knee Joint, Percutaneous Endoscopic Approach'
  },
  {
    id: 3,
    title:
      'Dilation of Left Internal Iliac Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Open Approach'
  },
  {
    id: 4,
    title: 'Insertion of Infusion Device into Ureter, Percutaneous Endoscopic Approach'
  },
  {
    id: 5,
    title: 'Division of Right Hip Tendon, Open Approach'
  },
  {
    id: 6,
    title: 'Insertion of Infusion Device into Right Shoulder Joint, Open Approach'
  }
]

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
          <ul className="blogs-list pt-2">
            {blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <div className={`${styles.ellipsis} hover:text-primary hover:cursor-pointer`}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <hr />
        <div className="list-holder py-4">
          <Heading as="h3" size="sm" className="block-header">
            Latest Blogs
          </Heading>
          <ul className="blogs-list pt-2">
            {blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <div className={`${styles.ellipsis} hover:text-primary hover:cursor-pointer`}>
                    <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <hr />
        <div className="list-holder pt-4">
          <Heading as="h3" size="sm" className="block-header">
            Programming languages
          </Heading>
          <ul className="blogs-list pt-2">
            {tags.map((tag) => {
              return (
                <li key={tag} className="capitalize">
                  <div className={`${styles.ellipsis} hover:text-primary hover:cursor-pointer`}>
                    <Link href={{ pathname: '/blogs', query: { tag: tag } }}>{tag}</Link>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Box>
    </aside>
  )
}

export default BlogSidebar
