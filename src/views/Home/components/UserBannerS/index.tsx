import React from 'react'
import { Box, Flex, Link, Text } from '@anpanswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const StyledCard = styled(Box)`
  border-top: 1px ${({ theme }) => theme.colors.secondary} solid;  
  border-bottom: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-left: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-right: 1px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} ${theme.radii.card} ${theme.radii.card}`};
  background: ${({ theme }) =>
    theme.isDark
      ? 'linear-gradient(360deg, rgba(128, 77, 0, 0.9) 0%, rgba(99, 49, 28, 0.9) 100%)'
      : 'linear-gradient(180deg, rgba(238, 209, 195, 0.9) 0%,  rgba(255, 235, 204, 0.9) 51.04%, rgba(255, 245, 204, 0.9) 100%)'};
`

const UserBannerS = () => {
  const { t } = useTranslation()
  return (
    <StyledCard p={['8px', null, null, '16px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '8px']} ml={[null, null, null, '8px']} flexDirection="column">
          <Text textAlign="start" color="failure" fontSize="20px">
          {t('Security: Audited by TechRate')}
          </Text>
          <Text as={Link} href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/AnpanSwap.pdf" target="_blank" textAlign="start" color="primary" fontSize="16px">
          {t('View [Factory/Router (Liquidity/Swap) & ANPAN]')}
          </Text>
          <Text as={Link} href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/AnpanSwapMasterChef.pdf" target="_blank" textAlign="start" color="primary" fontSize="16px">
          {t('View [MasterChef (Farms/Stake)]')}
          </Text>
          
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']} ml='16px' mt='8px' flexDirection="column">
          <Text textAlign="start" fontSize="16px">
            {t('Ownership Renounce: MasterChef is owner of ANPAN; Timelock is owner of MasterChef.')}
          </Text>
          <Text textAlign="start" fontSize="16px">
            {t('Liquidity Lock: Lock 1 year (on DEX list, November 1).')}
          </Text>
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBannerS
