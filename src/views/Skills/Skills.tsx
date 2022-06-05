import { Box, Flex, Heading } from '@chakra-ui/react'

import styles from './Skills.module.scss'
import Skill from './components/Skill'

const Skills = () => {
  return (
    <section id="skills">
      <Box className="content-wrap">
        <Box className="block-header" textAlign="center" margin="0 0 50px">
          <Heading as="h2" size="lg">
            Skills
          </Heading>
        </Box>
        <Box className="skills-table" marginBottom="60px">
          <table
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
        <Box className="block-header" textAlign="center" margin="0 0 50px">
          <Heading as="h2" size="md">
            Programming & Markup Languages
          </Heading>
        </Box>
        <Flex className="skills-content" flexWrap="wrap" justifyContent="center">
          <Box className={styles.skillWrapper} w="full">
            <Flex justifyContent="center">
              <Skill>
                <Flex justifyContent="center">
                  <Skill.Image src="/images/html.svg" alt="html5" />
                </Flex>
                <Skill.Label label="HTML5" />
              </Skill>
            </Flex>
          </Box>
          <Box className={styles.skillWrapper} w="full">
            <Flex justifyContent="center">
              <Skill>
                <Flex justifyContent="center">
                  <Skill.Image src="/images/css.svg" alt="css3" />
                </Flex>
                <Skill.Label label="CSS3" />
              </Skill>
            </Flex>
            <Flex justifyContent="center" className={styles.nestedSkillWrapper} paddingTop="60px">
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/bootstrap.svg" alt="bootstrap" />
                  </Flex>
                  <Skill.Label label="BOOTSTRAP" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/tailwind.svg" alt="tailwind" />
                  </Flex>
                  <Skill.Label label="TAILWIND" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/sass.svg" alt="sass/scss" />
                  </Flex>
                  <Skill.Label label="SASS/SCSS" />
                </Skill>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.skillWrapper} w="full">
            <Flex justifyContent="center">
              <Skill>
                <Flex justifyContent="center">
                  <Skill.Image src="/images/js.svg" alt="js" />
                </Flex>
                <Skill.Label label="JAVASCRIPT" />
              </Skill>
            </Flex>
            <Flex justifyContent="center" className={styles.nestedSkillWrapper} paddingTop="60px">
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/react.svg" alt="react" />
                  </Flex>
                  <Skill.Label label="REACT" />
                </Skill>
                <Flex className={styles.nestedSkillWrapper} paddingTop="50px">
                  <Box className={styles.nestedSkill}>
                    <Skill>
                      <Flex justifyContent="center">
                        <Skill.Image src="/images/next.svg" alt="next" />
                      </Flex>
                      <Skill.Label label="NEXT" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/vue.svg" alt="vue" />
                  </Flex>
                  <Skill.Label label="VUE" />
                </Skill>
                <Flex className={styles.nestedSkillWrapper} paddingTop="50px">
                  <Box className={styles.nestedSkill}>
                    <Skill>
                      <Flex justifyContent="center">
                        <Skill.Image src="/images/quasar.svg" alt="quasar" />
                      </Flex>
                      <Skill.Label label="QUASAR" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/handlebars.svg" alt="handlebars" />
                  </Flex>
                  <Skill.Label label="HANDLEBARS" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/d3.svg" alt="d3 js" />
                  </Flex>
                  <Skill.Label label="D3" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/node.svg" alt="node" />
                  </Flex>
                  <Skill.Label label="NODE" />
                </Skill>
                <Flex className={styles.nestedSkillWrapper} paddingTop="50px">
                  <Box className={styles.nestedSkill}>
                    <Skill>
                      <Flex justifyContent="center">
                        <Skill.Image src="/images/express.svg" alt="express" />
                      </Flex>
                      <Skill.Label label="EXPRESS" />
                    </Skill>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box className={styles.skillWrapper}>
            <Flex justifyContent="center">
              <Skill>
                <Flex justifyContent="center">
                  <Skill.Image src="/images/database.svg" alt="database" />
                </Flex>
                <Skill.Label label="DATABASE" />
              </Skill>
            </Flex>
            <Flex justifyContent="center" className={styles.nestedSkillWrapper} paddingTop="60px">
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/postgresql.svg" alt="postgresql" />
                  </Flex>
                  <Skill.Label label="PostgreSQL" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/mongodb.svg" alt="mongodb" />
                  </Flex>
                  <Skill.Label label="MongoDB" />
                </Skill>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justifyContent="center">
              <Skill>
                <Flex justifyContent="center">
                  <Skill.Image src="/images/cloud.svg" alt="cloud" />
                </Flex>
                <Skill.Label label="Cloud Technologies" />
              </Skill>
            </Flex>
            <Flex justifyContent="center" className={styles.nestedSkillWrapper} paddingTop="60px">
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/aws.svg" alt="aws s3" />
                  </Flex>
                  <Skill.Label label="AWS - S3" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/firebase.svg" alt="firebase" />
                  </Flex>
                  <Skill.Label label="Firebase" />
                </Skill>
              </Box>
              <Box className={styles.nestedSkill}>
                <Skill>
                  <Flex justifyContent="center">
                    <Skill.Image src="/images/heroku.svg" alt="heroku" />
                  </Flex>
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
