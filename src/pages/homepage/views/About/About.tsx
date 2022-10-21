import { Box, Heading, Flex } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './About.module.scss'
import { getDateDifferenceInYear } from '../../../../../helpers/date.helpers'

const myBirthDate = '1997-07-26'
const myFirstWorkingDate = '2017-03'
const About = () => {
  const profileMask = classNames('image-mask pt-72 md:pt-56', styles.mask1)
  const myAge = getDateDifferenceInYear(new Date(), myBirthDate)
  const myOverAllWorkPeriod = getDateDifferenceInYear(new Date(), myFirstWorkingDate)

  return (
    <section id="about">
      <Box className="content-wrap md:mb-8">
        <Flex className="flex-wrap mb-2 md:mb-4">
          <Box className="w-full px-8 mb-4 md:w-1/3 md:order-2 md:mb-0" textAlign="center">
            <div className={styles.imgHolder}>
              <div className={profileMask}></div>
            </div>
          </Box>
          <Box className="text-wrap w-full md:w-2/3 md:order-1">
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
        </Flex>
        <Flex className="flex-wrap md:-mx-3">
          <Box className="w-full md:w-1/3 md:order-2 md:px-3 list-holder capitalize">
            <ul className="info-list mb-4">
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
          </Box>
          <Box className="w-full md:w-2/3 md:order-1 md:px-3 table-holder text-sm md:text-lg">
            <table
              width="100%"
              style={{ tableLayout: 'fixed', textAlign: 'center', margin: '0 auto', borderCollapse: 'collapse' }}
              className={styles.skillsTable}
            >
              <thead>
                <tr>
                  <th>Hard Skills</th>
                  <th>Soft Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Structures &amp; Algorithms</td>
                  <td>Collaboration</td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>Communication</td>
                </tr>
                <tr>
                  <td>Figma / Photoshop / Illustrator</td>
                  <td>Critical Thinking</td>
                </tr>
                <tr>
                  <td>Debugging</td>
                  <td>Problem Solving</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>Enthusiasm</td>
                </tr>
                <tr>
                  <td>Wireframes</td>
                  <td>Work Ethics</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default About
