import React from 'react'
import { Flex, Text, Link } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import PurpleWordHeading from '../PurpleWordHeading'

interface AnpanSectionButton {
  to: string
  text: string
  external: boolean
}

export interface AnpanSectionProps {
  headingText: string
  bodyText: string
  foot1Text: string
  foot2Text: string
  foot3Text: string
  reverse: boolean
  secondaryButton: AnpanSectionButton
  images: CompositeImageProps
}

const AnpanSection: React.FC<AnpanSectionProps> = (props) => {
  const { t } = useTranslation()
  const { headingText, bodyText, foot1Text, foot2Text, foot3Text, reverse, secondaryButton, images } = props
  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)
  const foot1TextTranslatedText = t(foot1Text)
  const foot2TextTranslatedText = t(foot2Text)
  const foot3TextTranslatedText = t(foot3Text)

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
          mr={[null, null, null, !reverse && '1px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <PurpleWordHeading text={headingTranslatedText} />
          <Text color="textSubtle" mb="8px">
            {bodyTranslatedText}
          </Text>
          <Text color="text" mb="8px">
            {foot1TextTranslatedText}
          </Text>
          <Text color="text" mb="8px">
            {foot2TextTranslatedText}
          </Text>
          <Text color="text" mb="12px">
            {foot3TextTranslatedText}
          </Text>
          <Link external={secondaryButton.external} href={secondaryButton.to}>
              {t(secondaryButton.text)}
          </Link>
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

export default AnpanSection
