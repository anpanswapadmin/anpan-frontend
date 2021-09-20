import React from 'react'
import { Flex, Text } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import OrangeWordHeading from '../OrangeWordHeading'

export interface WinSectionProps {
  headingText: string
  bodyText: string
  footText: string
  reverse: boolean
  images: CompositeImageProps
}

const WinSection: React.FC<WinSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, footText, reverse, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)
  const footTextTranslatedText = t(footText)

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <OrangeWordHeading text={headingTranslatedText} />
          <Text color="textSubtle" mb="48px">
            {bodyTranslatedText}
          </Text>
          <Text color="failure" fontSize="36px">
            {footTextTranslatedText}
          </Text>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default WinSection
