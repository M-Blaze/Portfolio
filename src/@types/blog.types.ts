export type BLOG_TYPE = {
  id: number | string
  title: string
  likes: number
  createdAt: string
}

export type BLOG_STORE_TYPE = {
  blogs: BLOG_TYPE[]
}
