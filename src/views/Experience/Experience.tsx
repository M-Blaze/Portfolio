import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { getDateDifferenceForWorkTime } from '../../../helpers/date.helpers'

const Experience = () => {
  return (
    <section id="experience">
      <Box className="block-header" textAlign="center" margin="0 0 24px">
        <Heading as="h2" size="lg" marginBottom="4px">
          Experience
        </Heading>
      </Box>
      <div className="content-wrap">
        <Box backgroundColor="gray.200" className="experience p-4">
          <div className="list-holder">
            <ul className="content-list">
              <li>
                <strong>Company: OrlandotInc.</strong>
              </li>
              <li>
                <strong>Role: Senior Full stack Engineer</strong>
              </li>
              <li>{getDateDifferenceForWorkTime('present', '2020-03')}</li>
            </ul>
          </div>
          <div className="list-holder pl-8">
            <div className="block-title -ml-8">
              <h3>Responsibilities</h3>
            </div>
            <ul className="roles-list list-disc">
              <li>Designed and Developed the whole app from scratch using the MEVN stack.</li>
              <li>Automated Data analysis using python/pandas to analyze the data</li>
              <li>Combined Python with Node.js for implementing analysis.</li>
              <li>Worked on puppeeter.js and handlebars to generate pdf of the estimates.</li>
              <li>
                Built a dashboard to monitor the customer inflow, customer&apos;s product status, total sales, assign
                roles and permissions to users, etc...
              </li>
              <li>Visualized data using D3.js for easier monitoring and aid in decision making.</li>
              <li>Built an E-commerce web application with PayPal as the online payment gateway.</li>
            </ul>
          </div>
        </Box>
        <hr className="border-gray-300" />
        <Box backgroundColor="gray.200" className="experience p-4">
          <div className="list-holder">
            <ul className="content-list">
              <li>
                <strong>Company: Rapid Web Solutions (P) Ltd.</strong>
              </li>
              <li>
                <strong>Role: Senior Full stack Engineer</strong>
              </li>
              <li>{getDateDifferenceForWorkTime('2019-10', '2018-02')}</li>
            </ul>
          </div>
          <div className="list-holder pl-8">
            <div className="block-title">
              <h3>Responsibilities</h3>
            </div>
            <ul className="roles-list list-disc">
              <li>Built industry standard websites.</li>
              <li>Cross browser/platform supportive, Pixel Perfect and completely responsive.</li>
              <li>Worked together with highly experienced Developers, QA and Project Managers.</li>
            </ul>
          </div>
        </Box>
        <hr className="border-gray-300" />
        <Box backgroundColor="gray.200" className="experience p-4">
          <div className="list-holder">
            <ul className="content-list">
              <li>
                <strong>Company: Broadway Infosys Nepal</strong>
              </li>
              <li>
                <strong>Role: Apprenticeship </strong>
              </li>
              <li>{getDateDifferenceForWorkTime('2017-05', '2017-03')}</li>
            </ul>
          </div>
          <div className="list-holder pl-8">
            <div className="block-title">
              <h3>Responsibilities</h3>
            </div>
            <ul className="roles-list list-disc">
              <li>Built real world projects.</li>
              <li>Learnt industrial coding standards.</li>
            </ul>
          </div>
        </Box>
      </div>
    </section>
  )
}

export default Experience
