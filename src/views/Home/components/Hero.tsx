import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@anpanswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import UserBanner from './UserBanner'
import UserBannerU from './UserBannerU'
import UserBannerS from './UserBannerS'

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
          <Flex position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center">
          <Flex>
          {account &&
            <UserBanner/>
          }
          {!account &&
            <UserBannerU/>
          }
          </Flex>
          <Flex>
          {account &&
            <UserBannerS/>
          }
          {!account &&
            <UserBannerS/>
          }
          </Flex>
          </Flex>
        </Flex>
      </Flex> 
    </>
  )
}

export default Hero
