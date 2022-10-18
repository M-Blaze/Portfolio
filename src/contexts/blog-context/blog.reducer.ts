import { cloneDeep } from 'lodash'

import { BLOG_ACTIONS } from './blog.actions'
import { BLOG_STORE_TYPE } from 'src/@types/blog.types'
import { ActionType } from 'src/@types/action.types'

export const BlogReducer = (state: BLOG_STORE_TYPE, action: ActionType<BLOG_ACTIONS>): BLOG_STORE_TYPE => {
  const { type, payload } = action
  const clonedState = cloneDeep(state)

  switch (type) {
    case BLOG_ACTIONS.updateBlog:
      const targetBlogIndex = clonedState.blogs.findIndex((blog) => blog.id === payload.id)

      clonedState.blogs[targetBlogIndex] = payload
      return clonedState

    case BLOG_ACTIONS.deleteBlog:
      return {
        ...clonedState,
        blogs: clonedState.blogs.filter((blog) => blog.id !== payload.id)
      }

    default:
      throw new Error('Invalid store action')
  }
}
