import React, { useRef, useCallback } from 'react'
import { Container, Button } from '@chakra-ui/react'
import { Editor } from '@tinymce/tinymce-react'
import Head from 'next/head'

import Logo from '@/components/Logo'
import { BlogEditor } from '../components/BlogEditor'
import BlogTags, { TagsType } from '../components/BlogTags'
import { getToday } from 'helpers/date.helpers'

const EditBlog = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<Editor>(null)
  const blogTagsRef = useRef<TagsType>()
  const updateTags = useCallback((tags: TagsType) => {
    blogTagsRef.current = tags
  }, [])
  const updateBlog = () => {
    const titleRegex = /(?<=<h1>)(.*)(?=<\/h1>)/
    const blogContent = editorRef.current?.editor?.getContent()
    const title = blogContent?.match(titleRegex)

    if (!title) return alert('No title')

    const body = blogContent?.split(`<h1>${title[0]}</h1>\n`)[1]
    const payload = {
      title: title[0],
      createdAt: getToday(),
      content: body,
      tags: blogTagsRef.current
    }

    console.log(payload)
  }

  return (
    <>
      <Head>
        <title>Update Blog</title>
        <meta name="description" content="Portfolio of developer Moulik rai." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page__edit-blog">
        <div id="header" ref={headerRef}>
          <Container maxW="container.lg">
            <div className="header-content py-4 flex justify-between">
              <Logo />
              <nav>
                <ul className="nav-list">
                  <li>
                    <Button colorScheme="green" onClick={updateBlog}>
                      Update
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </div>
        <Container maxW="container.lg">
          <BlogTags updateTags={updateTags} />
          <BlogEditor headerHeight={headerRef.current?.clientHeight as number} ref={editorRef} />
        </Container>
      </div>
    </>
  )
}

export default EditBlog
