import { Box, Heading, Flex } from '@chakra-ui/react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about-me">
      <Box className="content-wrap" padding="2rem 0">
        <Box className="block-header" textAlign="center" marginBottom="8">
          <Heading as="h2" size="lg">
            About me
          </Heading>
        </Box>
        <Flex>
          <Box w="200px" textAlign="center">
            <div className="img-holder" style={{ marginBottom: '20px' }}>
              <Image src="/images/pp.jpg" alt="profile pic" />
            </div>
            <div className="text-wrap">
              <strong>Moulik Rai</strong> <br />
              <span>Fullstack Developer</span>
            </div>
          </Box>
          <Box className="text-wrap" flex="1" padding="0 15px">
            <p>
              Hey! This is Moulik, a professional fullstack developer since 2017. During my career, I have worked on
              various projects with multiple tech stacks co-ordinating with many skilled developers.
            </p>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default About
