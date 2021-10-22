import React from 'react'
import { Box, Flex, Link, Text } from '@anpanswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'

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

const UserBannerU = () => {
  const { t } = useTranslation()
  return (
    <StyledCard p={['8px', null, null, '16px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '8px']} ml={[null, null, null, '8px']}>
          <ConnectWalletButton mr="8px" />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']} ml='16px' mt='8px'>
          <Text as={Link} href="https://docs.anpanswap.finance/get-started/connection-guide" target="_blank" textAlign="center" color="primary" fontSize="16px">
            {t('Learn to Connect Wallet')}
          </Text>
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBannerU
