import { Box, Flex, Heading } from '@chakra-ui/react'
import classNames from 'classnames'

import styles from './Skills.module.scss'
import Skill from './components/Skill'

const Skills = () => {
  const nestedSkill = classNames(styles.nestedSkill, 'w-full')
  const nestedSkillWrapper = classNames(styles.nestedSkillWrapper, 'w-full flex-wrap')
  const skillWrapper = classNames(styles.skillWrapper, 'w-full')

  return (
    <section id="skills">
      <Box className="content-wrap pt-4">
        <Box className="block-header">
          <Heading as="h2" size="md">
            Skills
          </Heading>
        </Box>
        <Flex className="skills-content flex-wrap">
          <Box className={skillWrapper}>
            <Flex>
              <Skill>
                <Skill.Image src="/images/html.svg" alt="html5" />
                <Skill.Label label="HTML5" />
              </Skill>
            </Flex>
          </Box>
          <Box className={skillWrapper}>
            <Flex>
              <Skill>
                <Skill.Image src="/images/css.svg" alt="css3" />
                <Skill.Label label="CSS3" />
              </Skill>
            </Flex>
            <Flex className={nestedSkillWrapper}>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/bootstrap.svg" alt="bootstrap" />
                  <Skill.Label label="BOOTSTRAP" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/tailwind.svg" alt="tailwind" />
                  <Skill.Label label="TAILWIND" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/sass.svg" alt="sass/scss" />
                  <Skill.Label label="SASS/SCSS" />
                </Skill>
              </Box>
            </Flex>
          </Box>
          <Box className={skillWrapper}>
            <Flex>
              <Skill>
                <Flex>
                  <Skill.Image src="/images/js.svg" alt="js" />
                </Flex>
                <Skill.Label label="JAVASCRIPT / TYPESCRIPT" />
              </Skill>
            </Flex>
            <Flex className={nestedSkillWrapper} paddingTop="60px">
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/react.svg" alt="react" />
                  <Skill.Label label="REACT/REDUX" />
                </Skill>
                <Flex className={nestedSkillWrapper} paddingTop="50px">
                  <Box className={nestedSkill}>
                    <Skill>
                      <Skill.Image src="/images/next.svg" alt="next" />
                      <Skill.Label label="NEXT" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/vue.svg" alt="vue" />
                  <Skill.Label label="VUE/VUEX" />
                </Skill>
                <Flex className={nestedSkillWrapper} paddingTop="50px">
                  <Box className={nestedSkill}>
                    <Skill>
                      <Skill.Image src="/images/quasar.svg" alt="quasar" />
                      <Skill.Label label="QUASAR" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/handlebars.svg" alt="handlebars" />
                  <Skill.Label label="HANDLEBARS" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/d3.svg" alt="d3 js" />
                  <Skill.Label label="D3" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/node.svg" alt="node" />
                  <Skill.Label label="NODE" />
                </Skill>
                <Flex className={nestedSkillWrapper} paddingTop="50px">
                  <Box className={nestedSkill}>
                    <Skill>
                      <Skill.Image src="/images/express.svg" alt="express" />
                      <Skill.Label label="EXPRESS" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.skillWrapper}>
            <Flex>
              <Skill>
                <Skill.Image src="/images/database.svg" alt="database" />
                <Skill.Label label="DATABASE" />
              </Skill>
            </Flex>
            <Flex className={nestedSkillWrapper} paddingTop="60px">
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/postgresql.svg" alt="postgresql" />
                  <Skill.Label label="PostgreSQL" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/mongodb.svg" alt="mongodb" />
                  <Skill.Label label="MongoDB" />
                </Skill>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent="center">
              <Skill>
                <Skill.Image src="/images/cloud.svg" alt="cloud" />
                <Skill.Label label="Cloud Technologies" />
              </Skill>
            </Flex>
            <Flex justifyContent="center" className={nestedSkillWrapper} paddingTop="60px">
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/aws.svg" alt="aws s3" />
                  <Skill.Label label="AWS - S3" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/firebase.svg" alt="firebase" />
                  <Skill.Label label="Firebase" />
                </Skill>
              </Box>
              <Box className={nestedSkill}>
                <Skill>
                  <Skill.Image src="/images/heroku.svg" alt="heroku" />
                  <Skill.Label label="HEROKU" />
                </Skill>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </section>
  )
}

export default Skills
