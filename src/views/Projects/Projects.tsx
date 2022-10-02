import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects">
      <Box className="content-wrap">
        <Box className="block-header" textAlign="center" margin="0 0 50px">
          <Heading as="h2" size="lg" marginBottom="10px">
            Projects
          </Heading>
          <p className="text-xs">
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
                Envynote is a simple Progressive Web App used to create notebooks and write down notes inside it.
                Envynote uses React/Redux for frontend and Firebase&apos;s cloud service for backend and database.
              </p>
              <p style={{ marginBottom: '15px' }}>
                For Authentication, Users can either create an account or login via Google Authentication Api.
              </p>
              <Flex>
                <Box marginRight="10px">Tech stack:</Box>
                <Box flex="1">React, Redux, Firebase, Google Auth Api</Box>
              </Flex>
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
                main use-case of Titan is to provide an interface for entering customer&apos;s data, show dashboard to
                visualize the customers inflow and behaviour.
              </p>
              <p>
                As the lead developer, I had the whole responsibility to design and develop the architecture of Titan.
              </p>
              <p style={{ marginBottom: '15px' }}>
                Titan uses Quasar framework of Vue.js for the frontend, Express.js for the backend and MongoDB for the
                Database. A child process of Python/pandas is spawned for the Data Analysis which analyzes the
                customer&apos;s data and uploads the analyzed data in the database. D3.js is used for the visualization
                of the analyzed data.
              </p>
              <Flex>
                <Box marginRight="10px">Tech stack:</Box>
                <Box flex="1">Quasar (Vue), Vuex, Express.js, MongoDB, D3.js, Pandas (python), Sendgrid, Puppeeter</Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </Box>
    </section>
  )
}

export default Projects
