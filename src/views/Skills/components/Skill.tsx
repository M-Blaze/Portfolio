import React from 'react'
import { Box } from '@chakra-ui/react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './Skill.module.scss'

interface SkillProps {
  children?: React.ReactNode
}

interface SkillComposition {
  Image: ({ src, alt }: ImageProps) => JSX.Element
  Label: ({ label }: LabelProps) => JSX.Element
}

const Skill: React.FC<SkillProps> & SkillComposition = ({ children }) => {
  return (
    <Box className="skill" textAlign="center">
      {children}
    </Box>
  )
}

interface ImageProps {
  src: string
  alt: string
}

const SkillImage = ({ src, alt }: ImageProps) => {
  const classes = classNames('image-holder', styles.imageHolder)

  return (
    <div className={classes}>
      <Image src={src} alt={alt} />
    </div>
  )
}

interface LabelProps {
  label: string
}

const Label = ({ label }: LabelProps) => {
  const classes = classNames('skill-label', styles.label)

  return (
    <div className={classes} style={{ paddingTop: '10px' }}>
      <strong>{label}</strong>
    </div>
  )
}

Skill.Image = SkillImage
Skill.Label = Label

export default Skill
