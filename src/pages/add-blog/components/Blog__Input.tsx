import React, { useState } from 'react'
import { Textarea } from '@chakra-ui/react'
import BlogButton from './Blog__Button'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogInput = () => {
  const [content, setContent] = useState('')

  const changeHandler = (e: any) => {
    console.log(e)
  }

  return (
    <div className="blog-input relative">
      <BlogButton />
      <div className="markdown-holder">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        <Textarea resize="none" value={content} onChange={(e) => setContent(e.target.value)}></Textarea>
      </div>
    </div>
  )
}

export default BlogInput
