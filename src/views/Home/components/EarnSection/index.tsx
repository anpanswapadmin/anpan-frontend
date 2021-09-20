import React from 'react'
import { Flex, Text, Button, Link } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import OrangeWordHeading from '../OrangeWordHeading'

interface EarnSectionButton {
  to: string
  text: string
  external: boolean
}

export interface EarnSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: EarnSectionButton
  secondaryButton: EarnSectionButton
  images: CompositeImageProps
}

const EarnSection: React.FC<EarnSectionProps> = (props) => {
  const { t } = useTranslation()

  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

  const headingTranslatedText = t(headingText)
  const bodyTranslatedText = t(bodyText)

  return (
    <Flex flexDirection="column" mt="24px">
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
          <Text color="textSubtle" mb="24px">
            {bodyTranslatedText}
          </Text>
          <Flex>
            <Link mr="16px" external={primaryButton.external} href={primaryButton.to}>
              <Button>
                <Text color="card" bold fontSize="16px">
                  {t(primaryButton.text)}
                </Text>
              </Button>
            </Link>
            <Link external={secondaryButton.external} href={secondaryButton.to}>
              {t(secondaryButton.text)}
            </Link>
          </Flex>
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

export default EarnSection
