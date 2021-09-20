import React from 'react'
import { Heading, TextProps } from '@anpanswap/uikit'
import useTheme from 'hooks/useTheme'

interface HeadingProps extends TextProps {
  text: string
}

const OrangeWordHeading: React.FC<HeadingProps> = ({ text, ...props }) => {
  const { theme } = useTheme()
  const split = text.split(' ')
  const firstPartWords = split.slice(0, -1).join(' ')
  const lastWord = split.pop()
  return (
    <Heading scale="xl" mb="4px" style={{ color: theme.colors.secondary }} {...props}>
      <span style={{ color: theme.colors.text }}> {firstPartWords} </span>
      {lastWord}
    </Heading>
  )
}

export default OrangeWordHeading
