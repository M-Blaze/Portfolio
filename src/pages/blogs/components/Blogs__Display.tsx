import React, { useContext } from 'react'
import { BlogContext } from 'src/contexts/blog-context/blog.provider'
import BlogCard from './Blog__Card'

const BlogsDisplay = () => {
  const context = useContext(BlogContext)

  if (!context) throw new Error('No context found')

  const [state] = context

  return (
    <div className="blogs flex-1 mr-4">
      {state.blogs.map((blog) => (
        <BlogCard data={blog} key={blog.id} />
      ))}
    </div>
  )
}

export default BlogsDisplay
