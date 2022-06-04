import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects">
      <Box className="content-wrap">
        <Box className="block-header" textAlign="center" margin="0 0 50px">
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <p>
            Note: Due to NDA agreement of the companies that I have worked for, I cannot show all of the projects that I
            have done while working for them.
          </p>
        </Box>
        <div className="projects-content">
          <Box borderRadius="5" backgroundColor="gray.200" padding="15px" marginBottom="15px">
            <Flex className="block-header" alignItems="center">
              <Box className="image-holder" width="50px" height="50px" marginRight="15px">
                <Image src="images/envynote.png" alt="envy note" />
              </Box>
              <Heading as="h3" size="md">
                Envynote
              </Heading>
            </Flex>
            <Box className="content-wrap" flex="1" paddingTop="12px">
              <p>
                Envynote is a simple <span style={{ color: 'red' }}>Progressive Web App</span> used to create notebooks
                and write down notes inside it. Envynote is built using&nbsp;
                <span style={{ color: 'red' }}>React, Redux, Firebase</span>.
              </p>
              <p>
                For Authentication, Users can either create an account or login via{' '}
                <span style={{ color: 'red' }}>Google Authentication Api</span>.
              </p>
            </Box>
          </Box>
          <Box borderRadius="5" backgroundColor="gray.200" padding="15px">
            <Flex className="block-header" alignItems="center">
              <Box className="image-holder" width="50px" height="50px" marginRight="15px">
                <Image src="images/titan.png" alt="titan" />
              </Box>
              <Heading as="h3" size="md">
                Titan
              </Heading>
            </Flex>
            <Box className="content-wrap" flex="1" paddingTop="12px">
              <p>
                Titan is a huge and complex commercial project built for a variety of users with multiple roles. The
                main use-case of Titan is to provide an interface for the insertion of customer's data, show dashboard
                to visualize the customers inflow and behaviour.
              </p>
              <p>
                As the lead developer, I had the whole responsibility to design and develop the architecture of Titan.
              </p>
              <p style={{ marginBottom: '15px' }}>
                Titan uses <span style={{ color: 'red' }}>Quasar framework of Vue.js</span> for the frontend,{' '}
                <span style={{ color: 'red' }}>Express.js</span> for the backend and{' '}
                <span style={{ color: 'red' }}>MongoDB</span> for the Database. A child process of{' '}
                <span>Python/pandas</span> is spawned for the <span style={{ color: 'red' }}>Data Analysis</span> which
                analyzes the customer's data and uploads the analyzed data in the database.
                <span style={{ color: 'red' }}>D3.js</span> is used for the visualization of the analyzed data.
              </p>
              <Flex>
                <Box marginRight="10px">Tech stack:</Box>
                <Box flex="1">
                  <span style={{ color: 'red' }}>Quasar (Vue)</span>, <span style={{ color: 'red' }}>Express.Js</span>,{' '}
                  <span style={{ color: 'red' }}>MongoDB</span>, <span style={{ color: 'red' }}>D3.js</span>,{' '}
                  <span style={{ color: 'red' }}>Pandas (python)</span>, <span style={{ color: 'red' }}>Sendgrid</span>,{' '}
                  <span style={{ color: 'red' }}>Puppeeter</span>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </Box>
    </section>
  )
}

export default Projects
