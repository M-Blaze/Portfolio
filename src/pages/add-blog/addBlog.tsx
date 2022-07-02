import React, { useEffect, useRef, useMemo, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Container, Button, Spinner } from '@chakra-ui/react'
import Logo from '../../components/Logo'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [blogInputHeight, setBlogInputHeight] = useState(0)
  const editorRef = useRef<Editor>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isMountedRef = useRef(false)
  const publish = () => {
    const titleRegex = /(?<=<h1>)(.*)(?=<\/h1>)/
    const title = editorRef.current?.editor?.getContent().match(titleRegex)

    console.log(title)
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

              /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */

              input.onchange = function (e) {
                let file: any = input.files && input.files[0],
                  reader = new FileReader()

                reader.onload = function () {
                  /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                  let id = 'blobid' + new Date().getTime()
                  let blobCache = editorRef.current?.editor?.editorUpload.blobCache

                  if (!blobCache) return

                  const base64 = (reader.result as string).split(',')[1]
                  const blobInfo = blobCache.create(id, file, base64)
                  blobCache.add(blobInfo)

                  /* call the callback and populate the Title field with the file name */
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
