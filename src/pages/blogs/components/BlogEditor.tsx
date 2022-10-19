import React, { useEffect, useState, forwardRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Spinner } from '@chakra-ui/react'

interface BlogEditorProps {
  headerHeight: number
}

export type Ref = Editor
export const BlogEditor = forwardRef<Ref, BlogEditorProps>(({ headerHeight }, ref) => {
  const [isLoading, setIsLoading] = useState(true)
  const [blogInputHeight, setBlogInputHeight] = useState(0)

  useEffect(() => {
    setBlogInputHeight(screen.height - headerHeight - 50)
  }, [headerHeight])

  return (
    <>
      {isLoading && (
        <div className="spinner fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40 bg-white">
          <Spinner color="red.500" size="xl" thickness="4px" />
        </div>
      )}
      <Editor
        apiKey="g01m5b9uo29jb6dtvopbvumn3fd7u0nwkji2nemnysci0rmt"
        ref={ref}
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
                let blobCache = ref?.current?.editor?.editorUpload.blobCache

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
    </>
  )
})

BlogEditor.displayName = 'BlogEditor'
