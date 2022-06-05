import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const BlogSearch = () => {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <div className="blog-search pb-6">
      <InputGroup>
        <Input placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </div>
  )
}

export default BlogSearch
