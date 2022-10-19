import { useContext } from 'react'
import { BlogContext } from './blog.provider'

const useBlogContext = () => {
  const context = useContext(BlogContext)

  if (!context) throw new Error('Context not found')

  return context
}

export default useBlogContext
