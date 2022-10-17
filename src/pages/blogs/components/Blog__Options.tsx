import React, { useState } from 'react'
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useToast
} from '@chakra-ui/react'
import classNames from 'classnames'

import { ThumbsUp, MoreHorizontal, Share } from 'src/shared/icons'
import style from './Blog__Options.module.scss'

interface BlogProps {
  blogId: string | number
  likes: number
}

const BlogOptions: React.FC<BlogProps> = ({ blogId, likes }) => {
  const link = `https://localhost:8080/blogs/${blogId}`
  const listItemClasses = classNames(
    style.blogListItem,
    'mx-1 cursor-pointer aspect-square hover:bg-primary hover:text-white w-7 h-7 rounded-full flex items-center justify-center select-none'
  )
  const toast = useToast()
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [likesCount, setLikesCount] = useState(likes)

  const toggleShareModal = () => {
    setIsShareModalOpen((prev) => !prev)
  }
  const hitLike = () => {
    setLikesCount((prev) => prev + 1)
  }
  const copyLink = () => {
    navigator.clipboard.writeText(link)
    toast({
      title: 'Link Copied.',
      status: 'info',
      duration: 1000
    })
    toggleShareModal()
  }

  return (
    <Flex justifyContent="end">
      <ul className="options-list flex items-center">
        <li>({likesCount})</li>
        <li className={listItemClasses} onClick={hitLike}>
          <ThumbsUp />
        </li>
        <li className={listItemClasses} onClick={toggleShareModal}>
          <Share />
          <Modal isOpen={isShareModalOpen} onClose={toggleShareModal} isCentered>
            <ModalOverlay />
            <ModalContent padding={'20px'}>
              <ModalBody textAlign={'center'}>{link}</ModalBody>
              <ModalFooter justifyContent={'center'}>
                <Button colorScheme="blue" mr={3} onClick={copyLink}>
                  Copy link
                </Button>
                <Button onClick={toggleShareModal}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </li>
        <li className={listItemClasses}>
          <Menu>
            <MenuButton as={'button'}>
              <MoreHorizontal />
            </MenuButton>
            <MenuList color={'black'}>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
    </Flex>
  )
}

export default BlogOptions