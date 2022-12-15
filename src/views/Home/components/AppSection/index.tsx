import React from 'react'
import { Button, Link, Heading, Flex, Text, AnalyticsIcon, LiquidityIcon, SwapAIcon } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import OrangeWordFooting from '../OrangeWordFooting'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const SwapCardData: IconCardData = {
    icon: <SwapAIcon color="primary" width="36px" />,
  }

  const LiquidityCardData: IconCardData = {
    icon: <LiquidityIcon color="secondary" width="36px" />,
  }

  const AnalyticsCardData: IconCardData = {
    icon: < AnalyticsIcon color="failure" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="72px" width="72px" mb="14px" />
      <OrangeWordFooting text={t('Simple to trade.')}/>
      <Heading textAlign="center" scale="xl" mb="16px">
        {t('No registration.')}
      </Heading>
      <Flex justifyContent="center" alignItems="center" mb="16px" flexDirection="column">
      <Text textAlign="center" color="textSubtle" fontSize="16px" mr="8px">
        {t('Connecting your wallet to trade tokens on Binance Smart Chain in seconds.')}
      </Text>
      <Text as={Link} href="https://docs.anpanswap.finance/code/smart-contracts" target="_blank" textAlign="center" color="failure" fontSize="16px">
        {t('View Smart Contract')}
      </Text>
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard {...SwapCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Swap')}
            bodyText={t('Swapping tokens is done in an instant')}
            highlightColor={theme.colors.primary}
          />
          <Flex justifyContent="space-between" alignItems="center" mt="16px">
          <Button as={Link} href="https://exchange.anpanswap.finance/#/swap">
                {t('Swap Tokens Now')}
          </Button>
          <Text as={Link} href="https://docs.anpanswap.finance/products/anpanswap-exchange/trade-guide" target="_blank" color="primary" ml="2px">
                {t('Learn')}
          </Text>
          </Flex>
        </IconCard>
        <IconCard {...LiquidityCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <StatCardContent
            headingText={t('Liquidity')}
            bodyText={t('Add liquidity to earn trading fee and LP token')}
            highlightColor={theme.colors.secondary}
          />
          <Flex justifyContent="space-between" alignItems="center" mt="16px">
          <Button as={Link} href="https://exchange.anpanswap.finance/#/pool">
                {t('Add Liquidity Now')}
          </Button>
          <Text as={Link} href="https://docs.anpanswap.finance/products/anpanswap-exchange/liquidity-guide" target="_blank" color="primary" ml="2px">
                {t('Learn')}
          </Text>
          </Flex>
        </IconCard>
        <IconCard {...AnalyticsCardData}>
          <StatCardContent
            headingText={t('Analytics')}
            bodyText={t('Chart and data for the AnpanSwap protocol')}
            highlightColor={theme.colors.failure}
          />
          <Flex justifyContent="space-between" alignItems="center" mt="16px">
          <Button as={Link} href="https://info.anpanswap.finance">
                {t('Check Data Now')}
          </Button>
          <Text as={Link} href="https://docs.anpanswap.finance/products/info/anpanswap-analytics" target="_blank" color="primary" ml="2px">
                {t('Learn')}
          </Text>
          </Flex>
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
