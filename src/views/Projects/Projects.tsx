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
              <Box className="image-holder" marginRight="10px">
                <Image src="/images/envynote.png" alt="envy note" layout="intrinsic" width="50px" height="50px" />
              </Box>
              <Heading as="h3" size="md">
                Envynote
              </Heading>
            </Flex>
            <Box className="content-wrap" flex="1" paddingTop="12px">
              <p>
                Envynote is a simple <span className="text-red-500">Progressive Web App</span> used to create notebooks
                and write down notes inside it. Envynote is built using&nbsp;
                <span className="text-red-500">React, Redux, Firebase</span>.
              </p>
              <p>
                For Authentication, Users can either create an account or login via{' '}
                <span className="text-red-500">Google Authentication Api</span>.
              </p>
            </Box>
          </Box>
          <Box borderRadius="5" backgroundColor="gray.200" padding="15px">
            <Flex className="block-header" alignItems="center">
              <Box className="image-holder" marginRight="10px">
                <Image src="/images/titan.png" alt="titan" layout="intrinsic" width="50px" height="50px" />
              </Box>
              <Heading as="h3" size="md">
                Titan
              </Heading>
            </Flex>
            <Box className="content-wrap" flex="1" paddingTop="12px">
              <p>
                Titan is a huge and complex commercial project built for a variety of users with multiple roles. The
                main use-case of Titan is to provide an interface for the insertion of customer&apos;s data, show
                dashboard to visualize the customers inflow and behaviour.
              </p>
              <p>
                As the lead developer, I had the whole responsibility to design and develop the architecture of Titan.
              </p>
              <p style={{ marginBottom: '15px' }}>
                Titan uses <span className="text-red-500">Quasar framework of Vue.js</span> for the frontend,&nbsp;
                <span className="text-red-500">Express.js</span> for the backend and&nbsp;
                <span className="text-red-500">MongoDB</span> for the Database. A child process of&nbsp;
                <span className="text-red-500">Python/pandas</span> is spawned for the{' '}
                <span className="text-red-500">Data Analysis</span> which analyzes the customer&apos;s data and uploads
                the analyzed data in the database.&nbsp;
                <span className="text-red-500">D3.js</span> is used for the visualization of the analyzed data.
              </p>
              <Flex>
                <Box marginRight="10px">Tech stack:</Box>
                <Box flex="1">
                  <span className="text-red-500">Quasar (Vue)</span>, <span className="text-red-500">Express.Js</span>
                  ,&nbsp;
                  <span className="text-red-500">MongoDB</span>,&nbsp;
                  <span className="text-red-500">D3.js</span>,&nbsp;
                  <span className="text-red-500">Pandas (python)</span>,&nbsp;
                  <span className="text-red-500">Sendgrid</span>,&nbsp;
                  <span className="text-red-500">Puppeeter</span>
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
