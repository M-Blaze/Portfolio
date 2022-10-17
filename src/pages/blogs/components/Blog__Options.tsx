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
}

const BlogOptions: React.FC<BlogProps> = ({ blogId }) => {
  const link = `https://localhost:8080/blogs/${blogId}`
  const listClasses = classNames(
    style.blogListItem,
    'mx-1 cursor-pointer aspect-square hover:bg-primary hover:text-white w-7 h-7 rounded-full flex items-center justify-center'
  )
  const toast = useToast()
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const toggleShareModal = () => {
    setIsShareModalOpen((prev) => !prev)
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
        <li className={listClasses}>
          <ThumbsUp />
        </li>
        <li className={listClasses}>
          <Share onClick={toggleShareModal} />
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
        <li className={listClasses}>
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
