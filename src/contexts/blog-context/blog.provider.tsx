import { createContext, Dispatch, Reducer, useReducer } from 'react'
import { ActionType } from 'src/@types/action.types'
import { BLOG_STATE_TYPE } from 'src/@types/blog.types'
import { BLOG_ACTIONS } from './blog.actions'
import { BlogReducer } from './blog.reducers'
import { BLOG_STORE } from './blog.store'

export type BlogContextType = [BLOG_STATE_TYPE, Dispatch<ActionType<BLOG_ACTIONS>>]
export const BlogContext = createContext<BlogContextType | null>(null)

type BlogProviderType = React.HTMLAttributes<HTMLElement>
type BlogReducerType = Reducer<BLOG_STATE_TYPE, ActionType<BLOG_ACTIONS>>

export const BlogProvider: React.FC<BlogProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer<BlogReducerType>(BlogReducer, BLOG_STORE)

  return <BlogContext.Provider value={[state, dispatch]}>{children}</BlogContext.Provider>
}
