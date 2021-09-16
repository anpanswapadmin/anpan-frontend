import React from 'react'
import { Box, Flex } from '@anpanswap/uikit'
import styled from 'styled-components'
import FarmStakingCard from './FarmStakingCard'
import WalletCard from './WalletCard'
import UserDetail from './UserDetail'

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

const UserBanner = () => {
  return (
    <StyledCard p={['8px', null, null, '16px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '8px']} ml={[null, null, null, '8px']}>
          <UserDetail />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']} ml='16px' mt='8px' mb='8px'>
          <WalletCard />
        </Flex>
        <Flex flex="1" width={['100%', null, 'auto']} ml='16px' mt='8px' mb='8px'>
        <FarmStakingCard />
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBanner
