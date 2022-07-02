import { Container, Box, Flex } from '@chakra-ui/react'
import React from 'react'

import BlogSidebar from './components/BlogSidebar'
import BlogCard from './components/Blog__Card'

const data = [
  {
    id: 1,
    title: 'Ultrasonography of Left Ovary using Other Contrast',
    createdAt: '2021-09-15'
  },
  {
    id: 2,
    title: 'Removal of Synthetic Substitute from Left Knee Joint, Percutaneous Endoscopic Approach',
    createdAt: '2021-10-22'
  },
  {
    id: 3,
    title:
      'Dilation of Left Internal Iliac Artery, Bifurcation, with Four or More Drug-eluting Intraluminal Devices, Open Approach',
    createdAt: '2021-12-06'
  },
  {
    id: 4,
    title: 'Insertion of Infusion Device into Ureter, Percutaneous Endoscopic Approach',
    createdAt: '2021-12-18'
  },
  {
    id: 5,
    title: 'Division of Right Hip Tendon, Open Approach',
    createdAt: '2021-11-16'
  },
  {
    id: 6,
    title: 'Insertion of Infusion Device into Right Shoulder Joint, Open Approach',
    createdAt: '2021-12-16'
  },
  {
    id: 7,
    title: 'Removal of Drainage Device from Right Eye, Open Approach',
    createdAt: '2021-09-28'
  },
  {
    id: 8,
    title: 'Replacement of Right Femoral Shaft with Nonautologous Tissue Substitute, Open Approach',
    createdAt: '2021-09-02'
  },
  {
    id: 9,
    title: 'Drainage of Right Lower Leg Subcutaneous Tissue and Fascia, Percutaneous Approach',
    createdAt: '2022-03-21'
  },
  {
    id: 10,
    title: 'Drainage of Left Foot, Percutaneous Approach, Diagnostic',
    createdAt: '2021-07-29'
  }
]

const Blogs = () => {
  return (
    <Box className="blogs-wrapper" minH="100vh" bgColor="gray.200">
      <Container maxW="container.xl" className="blogs-content">
        <Flex>
          <div className="blogs flex-1 mr-4">
            {data.map((item) => (
              <BlogCard data={item} key={item.id} />
            ))}
          </div>
          <BlogSidebar />
        </Flex>
      </Container>
    </Box>
  )
}

export default Blogs
