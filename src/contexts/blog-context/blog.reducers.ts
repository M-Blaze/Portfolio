import { BLOG_STATE_TYPE } from 'src/@types/blog.types'
import { ActionType } from 'src/@types/action.types'
import { BLOG_ACTIONS } from './blog.actions'
import { cloneDeep } from 'lodash'

export const BlogReducer = (state: BLOG_STATE_TYPE, action: ActionType<BLOG_ACTIONS>): BLOG_STATE_TYPE => {
  const { type, payload } = action
  const clonedState = cloneDeep(state)

  switch (type) {
    case BLOG_ACTIONS.updateBlog:
      return state

    case BLOG_ACTIONS.addBlog:
      clonedState.blogs.push(payload)

      return clonedState

    case BLOG_ACTIONS.deleteBlog:
      clonedState.blogs = clonedState.blogs.filter((blog) => blog.id !== payload.id)

      return clonedState

    default:
      throw new Error('Invalid store action')
  }
}
