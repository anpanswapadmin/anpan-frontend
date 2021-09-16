import React from 'react'
import { Heading, Flex, Text, useMatchBreakpoints } from '@anpanswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split('_')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      width="248px"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '16px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading scale="xl">{remainingWords}</Heading>
      )}
      <Heading color={highlightColor} scale="xl" mb="16px">
        {lastWord}
      </Heading>
      <Text color="textSubtle">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
