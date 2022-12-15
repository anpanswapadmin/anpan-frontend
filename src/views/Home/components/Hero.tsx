import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Flex, Heading } from '@anpanswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import UserBanner from './UserBanner'
import UserBannerU from './UserBannerU'
import LiquidityLock from './LiquidityLockSvg'
import OwnerRenounce from './OwnerRenounceSvg'
import SecurityAudit from './SecurityAuditSvg'
import BscScan from './BscScanSvg'
import CoinMarketCap from './CoinMarketCapSvc'
import CoinGecko from './CoinGeckoSvg'
import TrustWallet from './TrustWalletSvg'
import BitcoinCom from './BitcoinComSvg'
import CoinTelegraph from './CoinTelegraphSvg'

const StyledLink = styled(Link)`
  display: flex;
`;

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
        <Flex justifyContent="center" alignItems="center" mt="24px" mb="16px" mr="72px" flexDirection="column">
          <Flex flex="1" flexDirection="row" justifyContent="space-between">
           <StyledLink as="a" href="https://www.team.finance/view-coin/0x10B0a78520fBDDa95aDc331445d9319B164F85D5?name=AnpanSwap%20Token&symbol=Anpan" aria-label="Anpan LiquidityLocking" target="_blank" >
             <LiquidityLock height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
           <StyledLink as="a" href="https://bscscan.com/tx/0x0baa8a4eebe54eca52f9f94371ac6e98682b7a69ce902961053915b57d8d2ff7" aria-label="Anpan OwnerRenounce" target="_blank" >
             <OwnerRenounce height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
           <StyledLink as="a" href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/AnpanSwapMasterChef.pdf" aria-label="Anpan SecurityAudit" target="_blank" >
             <SecurityAudit height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
          </Flex>
          <Flex flex="1" flexDirection="row" justifyContent="space-between">
           <StyledLink as="a" href="https://bscscan.com/token/0x10B0a78520fBDDa95aDc331445d9319B164F85D5" aria-label="Anpan BscScan" target="_blank" >
            <BscScan height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
           <StyledLink as="a" href="https://coinmarketcap.com/currencies/anpanswap-token/" aria-label="Anpan CoinMarketCap" target="_blank" >
            <CoinMarketCap height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
           <StyledLink as="a" href="https://www.coingecko.com/en/coins/anpanswap-token" aria-label="Anpan CoinGecko" target="_blank" >
             <CoinGecko height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
          </Flex>
          <Flex flex="1" flexDirection="row" justifyContent="space-between">
           <StyledLink as="a" href="https://github.com/trustwallet/assets/blob/45bf47f62444a2a68f24246d22aa8148004c555e/blockchains/smartchain/assets/0x10B0a78520fBDDa95aDc331445d9319B164F85D5/logo.png" aria-label="Anpan LogoOnTrustWallet" target="_blank" >
             <TrustWallet height="48px" width="48px" mb="24px" mr="48px"/>
           </StyledLink>
           <BitcoinCom height="40px" width="40px" mb="24px" mr="48px"/>
           <CoinTelegraph height="48px" width="48px" mb="24px" mr="48px"/>
          </Flex>
        </Flex> 
        <Flex flex="1" flexDirection="column" justifyContent="center">
          <Heading scale="xl" color="secondary" mb="24px">
            {t('Trade, Earn, Win with AnpanSwap')}
          </Heading>
          <Heading scale="md" mb="48px">
            {t('The Automated Market Maker (AMM) and yield farm on Binance Smart Chain.')}
          </Heading>
          
          <Flex>
          {account &&
            <UserBanner/>
          }
          {!account &&
            <UserBannerU/>
          }
          </Flex>
        </Flex>
      </Flex> 
    </>
  )
}

export default Hero
