export type BLOG_TYPE = {
  id: number | string
  title: string
  likes: number
  tags: string[]
  createdAt: string
}

export type BLOG_STATE_TYPE = {
  blogs: BLOG_TYPE[]
}
