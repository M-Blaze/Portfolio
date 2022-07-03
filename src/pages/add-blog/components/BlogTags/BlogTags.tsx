import React, { useMemo, useState } from 'react'
import { Tag, TagLabel, TagCloseButton } from '@chakra-ui/react'

import TagsInput from '../TagsInput'

const BlogTags = () => {
  const [tags, setTags] = useState<string[]>([])
  const deleteTag = (deletedTag: string) => {
    const filteredTags = tags.filter((tag) => tag !== deletedTag)

    setTags(filteredTags)
  }
  const addTag = (inputTag: string): boolean => {
    if (tags.includes(inputTag)) return false

    setTags([...tags, inputTag])
    return true
  }
  const hasTags = useMemo(() => {
    return !!tags.length
  }, [tags])

  return (
    <div
      className={`tags__input mb-4 flex flex-wrap border items-center border-gray-400 rounded-md ${
        hasTags ? 'px-2' : ''
      }`}
    >
      {tags.map((tag) => (
        <Tag size="lg" key={tag} borderRadius="full" variant="solid" marginRight="2" marginY="2" colorScheme="green">
          <TagLabel>{tag}</TagLabel>
          <TagCloseButton onClick={() => deleteTag(tag)} />
        </Tag>
      ))}
      <TagsInput addTag={addTag} hasTags={hasTags} />
    </div>
  )
}

export default BlogTags
