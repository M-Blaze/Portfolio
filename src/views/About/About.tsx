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
            <Box className="text-wrap" marginBottom="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A doloribus nulla magnam exercitationem possimus
              aliquid laborum itaque repudiandae natus minima in at explicabo nostrum dicta non quam, rem illum tempore.
            </Box>
            <Box className="table-holder px-5">
              <table
                width="100%"
                style={{ tableLayout: 'fixed', textAlign: 'center', margin: '0 auto', borderCollapse: 'collapse' }}
                className={styles.skillsTable}
              >
                <thead>
                  <tr>
                    <th>Soft Skills</th>
                    <th>Hard Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Collaboration</td>
                    <td>Data Structures &amp; Algorithms</td>
                  </tr>
                  <tr>
                    <td>Communication</td>
                    <td>Github</td>
                  </tr>
                  <tr>
                    <td>Critical Thinking</td>
                    <td>Figma / Photoshop / Illustrator</td>
                  </tr>
                  <tr>
                    <td>Problem Solving</td>
                    <td>Debugging</td>
                  </tr>
                  <tr>
                    <td>Enthusiasm</td>
                    <td>Testing</td>
                  </tr>
                  <tr>
                    <td>Work Ethics</td>
                    <td>Wireframes</td>
                  </tr>
                </tbody>
              </table>
            </Box>
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
