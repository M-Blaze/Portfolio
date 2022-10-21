import React from 'react'
import Head from 'next/head'

import BlogHeader from '../components/BlogHeader'
import Footer from '../components/Footer'

interface BlogLayoutProps {
  title: string
  children: React.ReactNode
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portfolio of developer - Moulik rai." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="App">
        <BlogHeader />
        <main style={{ overflow: 'hidden' }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default BlogLayout
