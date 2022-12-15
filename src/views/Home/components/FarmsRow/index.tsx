import React, { useState} from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import useGetTopFarmsByApr from 'views/Home/hooks/useGetTopFarmsByApr'
import TopFarm from './TopFarm'
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

const FarmsRow = () => {
  const [showFarms] = useState(true)
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const { topFarms } = useGetTopFarmsByApr(isIntersecting)
  
  return (
    <div ref={observerRef}>
      <Flex flexDirection="column" mt="24px">
        <Flex mb="24px">
          <RowHeading text={ t('Top Farms')} />
        </Flex>
        <Box height={['240px', null, '80px']}>
          <Grid>
            {topFarms.map((topFarm, index) => (
              <TopFarm
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={topFarm?.lpSymbol}
                percentage={topFarm?.apr + topFarm?.lpRewardsApr}
                index={index}
                visible={showFarms}
              />
            ))}
          </Grid>
        </Box>
      </Flex>
    </div>
  )
}

export default FarmsRow
