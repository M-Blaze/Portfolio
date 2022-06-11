import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Container, Button } from '@chakra-ui/react'

export default function App() {
  const editorRef = useRef<Editor>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const log = () => {
    console.log(editorRef.current?.editor?.getContent())
  }
  return (
    <Container maxW="container.lg">
      <Editor
        apiKey="g01m5b9uo29jb6dtvopbvumn3fd7u0nwkji2nemnysci0rmt"
        ref={editorRef}
        id="tiny-react_34880466421654916068552"
        init={{
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
      <Button colorScheme="green" onClick={log}>
        Publish
      </Button>
    </Container>
  )
}
