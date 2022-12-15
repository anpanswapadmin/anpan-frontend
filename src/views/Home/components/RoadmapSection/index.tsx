import React from 'react'
import styled from 'styled-components'
import { Flex } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import OrangeWordHeading from '../OrangeWordHeading'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: ${({ theme }) => (theme.isDark ? 'rgba(8, 6, 11, 0.6)' : ' rgba(255, 255, 255, 0.6)')};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const CardImage = styled.img`
  position: center;
  padding: 2px;
`

const RoadmapSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      
      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <OrangeWordHeading textAlign="center" text={t('Roadmap')} />
          <CardImage src="/images/home/roadmap/Roadmap.png" width={880} height={476} />
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default RoadmapSection
