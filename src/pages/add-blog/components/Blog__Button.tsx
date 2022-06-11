import React from 'react'
import { AddIcon } from '@chakra-ui/icons'

const BlogButton = () => {
  return (
    <div className="icon-holder blog-button absolute top-4 -left-12 rounded-full border-3 w-10 h-10 flex justify-center items-center">
      <AddIcon />
    </div>
  )
}

export default BlogButton
