import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, useMatchBreakpoints } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAnpanVault } from 'state/hooks'
import { Pool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import TokenPairImage from 'components/TokenPairImage'
import AnpanVaultTokenPairImage from '../../AnpanVaultCard/AnpanVaultTokenPairImage'
import BaseCell, { CellContent } from './BaseCell'

interface NameCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const NameCell: React.FC<NameCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isXs, isSm } = useMatchBreakpoints()
  const { sousId, stakingToken, earningToken, userData, isFinished, isAutoVault } = pool
  const {
    userData: { userShares },
  } = useAnpanVault()
  const hasVaultShares = userShares && userShares.gt(0)

  const stakingTokenSymbol = stakingToken.symbol
  const earningTokenSymbol = earningToken.symbol

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const isManualAnpanPool = sousId === 0

  const showStakedTag = isAutoVault ? hasVaultShares : isStaked

  let title = `${t('Earn')} ${earningTokenSymbol}`
  let subtitle = `${t('Stake')} ${stakingTokenSymbol}`
  const showSubtitle = sousId !== 0 || (sousId === 0 && !isXs && !isSm)

  if (isAutoVault) {
    title = t('Auto ANPAN')
    subtitle = t('Automatic restaking')
  } else if (isManualAnpanPool) {
    title = t('Manual ANPAN')
    subtitle = `${t('Earn')} ANPAN ${t('Stake').toLocaleLowerCase()} ANPAN`
  }

  return (
    <StyledCell role="cell">
      {isAutoVault ? (
        <AnpanVaultTokenPairImage mr="8px" width={40} height={40} />
      ) : (
        <TokenPairImage primaryToken={earningToken} secondaryToken={stakingToken} mr="8px" width={40} height={40} />
      )}
      <CellContent>
        {showStakedTag && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <Text bold={!isXs && !isSm} small={isXs || isSm}>
          {title}
        </Text>
        {showSubtitle && (
          <Text fontSize="12px" color="textSubtle">
            {subtitle}
          </Text>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell
