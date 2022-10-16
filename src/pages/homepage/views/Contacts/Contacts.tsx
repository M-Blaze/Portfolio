import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'

const Contacts = () => {
  return (
    <section id="contact">
      <Flex justifyContent="center" alignItems="center" padding="30px 0">
        <Box className="contact" w="80px" padding="0 15px">
          <div className="image-holder">
            <a href="https://github.com/M-Blaze" target="_blank" rel="noopener noreferrer">
              <Image src="/images/github.svg" alt="github" layout="responsive" width="80px" height="80px" />
            </a>
          </div>
        </Box>
        <Box className="contact" w="80px" padding="0 15px">
          <div className="image-holder">
            <a href="https://np.linkedin.com/in/moulik-rai-16a35618a" target="_blank" rel="noopener noreferrer">
              <Image src="/images/linkedin.svg" alt="linkedin" layout="responsive" width="80px" height="80px" />
            </a>
          </div>
        </Box>
        <Box className="contact" w="80px" padding="0 15px">
          <div className="image-holder">
            <a href="mailto:raimoulik@gmail.com">
              <Image src="/images/gmail.svg" alt="gmail" layout="responsive" width="80px" height="80px" />
            </a>
          </div>
        </Box>
        <Box className="contact" w="90px" padding="0 15px">
          <div className="image-holder">
            <a href="https://www.youtube.com/channel/UC8_7IRFmrHzGjZVjxKxvw8Q">
              <Image src="/images/youtube.svg" alt="youtube" layout="responsive" width="80px" height="80px" />
            </a>
          </div>
        </Box>
      </Flex>
    </section>
  )
}

export default Contacts
