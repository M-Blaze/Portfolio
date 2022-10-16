import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects">
      <Box className="section-wrap pt-3">
        <Box className="block-header" textAlign="center" margin="0 0 50px">
          <Heading as="h2" size="lg" marginBottom="4px">
            Projects
          </Heading>
          <em className="text-xs">
            Note: Due to NDA agreement of the companies that I have worked for, I cannot mention all of the projects
            that I have done while working for them.
          </em>
        </Box>
        <div className="content-wrap">
          <Box borderRadius="5" className="p-8" backgroundColor="gray.200" marginBottom="15px">
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
                Envynote is a simple Progressive Web App for creating notebooks and taking notes inside them.
                Envynote&apos; frontend is built with React/Redux, and the backend and database are handled by
                Firebase&apos; cloud service.
              </p>
              <p style={{ marginBottom: '15px' }}>
                For Authentication, Users can either create an account or login using Google&apos;s authentication api.
              </p>
              <Flex>
                <Box marginRight="10px">Tech stack:</Box>
                <Box flex="1">React, Redux, Firebase, Google Auth Api</Box>
              </Flex>
            </Box>
          </Box>
          <Box borderRadius="5" className="p-8" backgroundColor="gray.200">
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
                Titan is a large and complex commercial project designed for a wide range of users with varying roles.
                Titan&apos;s main use-case is to provide an interface for entering customer data and to display a
                dashboard to visualize customer inflow and behavior.
              </p>
              <p>
                As the lead developer, I was solely responsible for designing and developing Titan&apos;s architecture.
              </p>
              <p style={{ marginBottom: '15px' }}>
                Titan employs the Vue.js Quasar framework for the frontend, Express.js for the backend, and MongoDB for
                the database. For the Data Analysis, a Python/pandas child process is launched, which analyzes the
                customer&apos;s data and uploads the analyzed data to the database. D3.js is used to visualize the data
                that has been analyzed.
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
