import { Box, Flex, Heading, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'

import Skill from './components/Skill'

const frontendSkills = [
  {
    imgName: 'js.svg',
    label: 'JS / TS'
  },
  {
    imgName: 'react.svg',
    label: 'react'
  },
  {
    imgName: 'next.svg',
    label: 'next.js'
  },
  {
    imgName: 'tailwind.svg',
    label: 'TAILWIND'
  },
  {
    imgName: 'vue.svg',
    label: 'vue'
  },
  {
    imgName: 'quasar.svg',
    label: 'quasar'
  },
  {
    imgName: 'd3.svg',
    label: 'd3'
  },
  {
    imgName: 'handlebars.svg',
    label: 'handlebars'
  },
  {
    imgName: 'html.svg',
    label: 'HTML5'
  },
  {
    imgName: 'css.svg',
    label: 'CSS3'
  },
  {
    imgName: 'sass.svg',
    label: 'SASS/SCSS'
  },
  {
    imgName: 'bootstrap.svg',
    label: 'BOOTSTRAP'
  }
]
const backendSkills = [
  {
    imgName: 'node.svg',
    label: 'node'
  },
  {
    imgName: 'express.svg',
    label: 'express'
  },

  {
    imgName: 'postgresql.svg',
    label: 'PostgreSQL'
  },
  {
    imgName: 'mongodb.svg',
    label: 'mongodb'
  },
  {
    imgName: 'aws.svg',
    label: 'aws - s3'
  },
  {
    imgName: 'firebase.svg',
    label: 'firebase'
  },
  {
    imgName: 'heroku.svg',
    label: 'heroku'
  }
]

const Skills = () => {
  return (
    <section id="skills">
      <Box className="content-wrap pt-4 mb-8">
        <Box className="block-header mb-4">
          <Heading as="h2" size="lg" textAlign={'center'}>
            Skills
          </Heading>
        </Box>
        <Tabs border={'1px solid rgba(0, 0, 0, 0.1)'} borderRadius={5}>
          <TabList>
            <Tab _selected={{ color: 'white', bg: '#6C2BD9' }} _focus={{ outline: 'none' }}>
              Frontend
            </Tab>
            <Tab _selected={{ color: 'white', bg: '#6C2BD9' }} _focus={{ outline: 'none' }}>
              Backend
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel paddingTop={10} className="flex flex-wrap">
              {frontendSkills.map((skill) => (
                <div className="skill-wrapper w-1/2 xs:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4 md:mb-6" key={skill.label}>
                  <Skill>
                    <Skill.Image src={`/images/${skill.imgName}`} alt={skill.label} />
                    <Skill.Label label={skill.label} />
                  </Skill>
                </div>
              ))}
            </TabPanel>
            <TabPanel paddingTop={10} className="flex flex-wrap">
              {backendSkills.map((skill) => (
                <div className="skill-wrapper w-1/2 xs:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb-4 md:mb-6" key={skill.label}>
                  <Skill>
                    <Skill.Image src={`/images/${skill.imgName}`} alt={skill.label} />
                    <Skill.Label label={skill.label} />
                  </Skill>
                </div>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </section>
  )
}

export default Skills
