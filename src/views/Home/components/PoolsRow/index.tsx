import React, { useState} from 'react'
import styled from 'styled-components'
import { Flex, Box} from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopPoolsByApr from 'views/Home/hooks/useGetTopPoolsByApr'
import TopPool from './TopPool'
import RowHeading from './RowHeading'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(5, auto);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
  }
`

const PoolsRow = () => {
  const [showFarms] = useState(false)
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { topPools } = useGetTopPoolsByApr(isIntersecting)

  const getPoolText = (pool: Pool) => {
    if (pool.isAutoVault) {
      return t('Auto ANPAN')
    }
    if (pool.sousId === 0) {
      return t('Manual ANPAN')
    }
    return t('Stake %stakingSymbol% - Earn %earningSymbol%', {
      earningSymbol: pool.earningToken.symbol,
      stakingSymbol: pool.stakingToken.symbol,
    })
  }

  return (
    <div ref={observerRef}>
      <Flex flexDirection="column" mt="24px">
        <Flex mb="24px">
          <RowHeading text={t('Top Honey Pools')} />
        </Flex>
        <Box height={['240px', null, '80px']}>
          <Grid>
            {topPools.map((topPool, index) => (
              <TopPool
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={topPool && getPoolText(topPool)}
                percentage={topPool?.apr}
                index={index}
                visible={!showFarms}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </div>
  )
}

export default PoolsRow
