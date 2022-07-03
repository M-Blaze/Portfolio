import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

interface TagsInputProps {
  addTag: (tag: string) => boolean
  hasTags: boolean
}

const TagsInput: React.FC<TagsInputProps> = ({ addTag, hasTags }) => {
  const [input, setInput] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const addTagOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.length) {
      // Return if adding tag fails
      if (!addTag(input)) return

      setInput('')
    }
  }

  return (
    <div className={`input-group ${!isFocus ? 'flex-1' : ''}`}>
      <Input
        placeholder={hasTags ? '' : 'Tags'}
        value={input}
        padding={hasTags ? '0' : '2'}
        onChange={(e) => setInput(e.target.value)}
        outline="none"
        border="none"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        focusBorderColor="transparent"
        onKeyDown={addTagOnEnter}
      />
    </div>
  )
}

export default TagsInput
