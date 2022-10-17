import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Container, Button, Spinner } from '@chakra-ui/react'

import Logo from '../../components/Logo'
import BlogTags from './components/BlogTags'
import { getToday } from 'helpers/date.helpers'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [blogInputHeight, setBlogInputHeight] = useState(0)
  const editorRef = useRef<Editor>(null)
  const blogTagsRef = useRef<string[]>([])
  const headerRef = useRef<HTMLDivElement>(null)
  const isMountedRef = useRef(false)
  const updateTags = useCallback((tags: string[]) => {
    blogTagsRef.current = tags
  }, [])
  const publish = () => {
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

  useEffect(() => {
    if (isMountedRef.current) {
      setBlogInputHeight(screen.height - (headerRef.current?.clientHeight as number) - 50)
    }

    return () => {
      isMountedRef.current = true
    }
  }, [])

  return (
    <div className="page__add-blog">
      <div className="header" ref={headerRef}>
        <Container maxW="container.lg">
          <div className="header-content py-4 flex justify-between">
            <Logo />
            <nav>
              <ul className="nav-list">
                <li>
                  <Button colorScheme="green" onClick={publish}>
                    Publish
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <Container maxW="container.lg">
        {isLoading && (
          <div className="spinner fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 bg-white">
            <Spinner color="red.500" size="xl" thickness="4px" />
          </div>
        )}
        <BlogTags updateTags={updateTags} />
        <Editor
          apiKey="g01m5b9uo29jb6dtvopbvumn3fd7u0nwkji2nemnysci0rmt"
          ref={editorRef}
          id="tiny-react_34880466421654916068552"
          onInit={() => setIsLoading(false)}
          init={{
            min_height: blogInputHeight,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code',
              'help',
              'wordcount'
            ],
            file_picker_types: 'image',
            file_picker_callback: function (cb, value, meta) {
              const input = document.createElement('input')

              input.setAttribute('type', 'file')
              input.setAttribute('accept', 'image/*')
              input.onchange = function (e) {
                let file: any = input.files && input.files[0],
                  reader = new FileReader()

                reader.onload = function () {
                  let id = 'blobid' + new Date().getTime()
                  let blobCache = editorRef.current?.editor?.editorUpload.blobCache

                  if (!blobCache) return

                  const base64 = (reader.result as string).split(',')[1]
                  const blobInfo = blobCache.create(id, file, base64)
                  blobCache.add(blobInfo)

                  cb(blobInfo.blobUri(), { title: file.name })
                }
                reader.readAsDataURL(file)
              }

              input.click()
            },
            menubar: false,
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help' +
              ' | link image',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </Container>
    </div>
  )
}
