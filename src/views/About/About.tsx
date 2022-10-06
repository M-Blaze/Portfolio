import { Box, Heading, Flex } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './About.module.scss'
import { getDateDifferenceInYear } from '../../../helpers/date.helpers'

const myBirthDate = '1997-07-26'
const myFirstWorkingDate = '2017-03'
const About = () => {
  const profileMask = classNames('image-mask', styles.mask1)
  const myAge = getDateDifferenceInYear(new Date(), myBirthDate)
  const myOverAllWorkPeriod = getDateDifferenceInYear(new Date(), myFirstWorkingDate)

  return (
    <section id="about">
      <Box className="content-wrap" padding="2rem 0">
        <Flex alignItems="center">
          <Box className="text-wrap" flex="1" padding="0 15px">
            <div className="block-header mb-2">
              <Heading as="h2">Hey, This is Moulik!</Heading>
              <strong>A professional fullstack developer</strong>
            </div>
            <p>
              I am an experienced Full-Stack Developer with a strong desire to learn, improve and improvise. I have over
              &nbsp;{myOverAllWorkPeriod}+ years of experience working in the industry. I&apos;ve created and built
              websites from ground up that are utilized by a large number of users. I strive for perfection in whatever
              I do and am fascinated by new technologies.
            </p>
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
                  <strong>Age:</strong>&nbsp;<span className="text-gray-500">{myAge}</span>
                </li>
                <li className="mb-1">
                  <strong>Hobbies:</strong>
                  <div className="list-holder">
                    <ul className="hobbies-list text-gray-500 pl-2">
                      <li>Chess</li>
                      <li>Competetive Programming</li>
                      <li>Gaming</li>
                      <li>Guitar</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <strong>Education:</strong>
                  <br />
                  <span className="text-wrap pl-2">B.E. IT</span>
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
