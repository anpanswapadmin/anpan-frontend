import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getAnpanAddress } from 'utils/addressHelpers'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceAnpanBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import Balance from 'components/Balance'

const StyledColumn = styled(Flex)<{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, auto);
  }
`

const emissionsPerBlock = 24

const AnpanDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getAnpanAddress()))
  const anpanSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const anpanPriceBusd = usePriceAnpanBusd()
  
  
  const data = useGetStats()
  const tvl = data ? data.tvl: null
  const tvlf = anpanPriceBusd.times(tvl).plus(new BigNumber(13700))
  const tvlff = formatLocalisedCompactNumber(tvlf.toNumber())

  return (
    <Grid>
      <Flex flexDirection="column">
        <Text color="textSubtle">{t('Total supply')}</Text>
        {anpanSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="18px" bold value={anpanSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </Flex>
      <StyledColumn>
        <Text color="textSubtle">{t('Burned to date')}</Text>
        
          <Balance decimals={0} lineHeight="1.1" fontSize="18px" bold value={burnedBalance} />
        
        
      </StyledColumn>
      <StyledColumn>
        <Text color="textSubtle">{t('Current emissions')}</Text>

        <Heading scale="md">{t('%anpanEmissions%/block', { anpanEmissions: emissionsPerBlock })}</Heading>
      </StyledColumn>
      <StyledColumn noMobileBorder>
        <Text color="textSubtle">{t('Total Value Locked')}</Text>
        {data ? (
          <>
            <Heading scale="md">{`$${tvlff}`}</Heading>
          </>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
      </StyledColumn>
    </Grid>
  )
}

export default AnpanDataRow
