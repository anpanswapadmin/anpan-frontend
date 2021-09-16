import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Link, Text } from '@anpanswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import UserBanner from './UserBanner'

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex flex="1" flexDirection="column" justifyContent="center">
          <Heading scale="xl" color="secondary" mb="24px">
            {t('Trade, Earn, Win with AnpanSwap')}
          </Heading>
          <Heading scale="md" mb="48px">
            {t('The Automated Market Maker (AMM) and yield farm on Binance Smart Chain.')}
          </Heading>
          <Flex>
          {account &&
            <UserBanner />
          }
            {!account &&
            <Text as={Link} href="https://docs.anpanswap.finance/#/get-started/connection-guide" target="_blank" textAlign="center" color="primary" fontSize="16px">
            {t('Learn to Connect Wallet')}
           </Text>
            }
          </Flex>
        </Flex>
      </Flex> 
    </>
  )
}

export default Hero
