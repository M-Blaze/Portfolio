import { Box, Heading, Flex } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './About.module.scss'

const About = () => {
  const profileMask = classNames('image-mask', styles.mask1)

  return (
    <section id="about-me">
      <Box className="content-wrap" padding="2rem 0">
        <Flex alignItems="center">
          <Box className="text-wrap" flex="1" padding="0 15px">
            <Heading as="h2">Hey, This is Moulik!</Heading>
            <strong>A professional fullstack developer</strong>
          </Box>
          <Box w="200px" textAlign="center">
            <div className={styles.imgHolder}>
              <div className={profileMask} style={{ marginBottom: '20px' }}>
                <Image
                  src="/images/pp.jpg"
                  priority
                  alt="profile pic"
                  layout="responsive"
                  width="200px"
                  height="320px"
                />
              </div>
            </div>
          </Box>
        </Flex>
        <Flex marginTop="-30px">
          <Box flex="1" padding="0 15px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus nulla magnam exercitationem possimus
            aliquid laborum itaque repudiandae natus minima in at explicabo nostrum dicta non quam, rem illum tempore.
          </Box>
          <Box w="200px">
            <div className="list-holder capitalize">
              <ul className="info-list">
                <li className="mb-1">
                  <strong>Age:</strong> <span className="text-gray-500">25</span>
                </li>
                <li className="mb-1">
                  <strong>Interests:</strong>&nbsp;
                  <span className="text-gray-500">
                    Programming, Competitive gaming, Competetive programming, Singing, Playing Guitar, Chess
                  </span>
                </li>
                <li>
                  <strong>Education:</strong>&nbsp;
                  <span className="text-cyan-500">B.E. Information Technology</span>
                </li>
              </ul>
            </div>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default About
