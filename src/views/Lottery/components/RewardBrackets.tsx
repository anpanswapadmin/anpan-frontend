import React from 'react'
import BigNumber from 'bignumber.js'
import { Flex, Text } from '@anpanswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { LotteryRound } from 'state/types'
import RewardBracketDetail from './RewardBracketDetail'

const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
`

const RewardsInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  row-gap: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(4, 1fr);
  }
`

interface RewardMatchesProps {
  lotteryData: LotteryRound
  isHistoricRound?: boolean
}

const RewardBrackets: React.FC<RewardMatchesProps> = ({ lotteryData, isHistoricRound }) => {
  const { t } = useTranslation()
  const { treasuryFee, amountCollectedInAnpan, rewardsBreakdown, countWinnersPerBracket } = lotteryData

  const feeAsPercentage = new BigNumber(treasuryFee).div(100)
  const anpanToBurn = feeAsPercentage.div(100).times(new BigNumber(amountCollectedInAnpan))
  const amountLessTreasuryFee = new BigNumber(amountCollectedInAnpan).minus(anpanToBurn)

  const getAnpanRewards = (bracket: number) => {
    const shareAsPercentage = new BigNumber(rewardsBreakdown[bracket]).div(100)
    return amountLessTreasuryFee.div(100).times(shareAsPercentage)
  }

  return (
    <Wrapper>
      <Text fontSize="14px" mb="24px">
        {t('Match the winning number in the same order to share prizes.')}{' '}
        {!isHistoricRound && t('Current prizes up for grabs:')}
      </Text>
      <RewardsInner>
        <RewardBracketDetail
          rewardBracket={5}
          anpanAmount={getAnpanRewards(5)}
          numberWinners={countWinnersPerBracket[5]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail
          rewardBracket={4}
          anpanAmount={getAnpanRewards(4)}
          numberWinners={countWinnersPerBracket[4]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail
          rewardBracket={3}
          anpanAmount={getAnpanRewards(3)}
          numberWinners={countWinnersPerBracket[3]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail
          rewardBracket={2}
          anpanAmount={getAnpanRewards(2)}
          numberWinners={countWinnersPerBracket[2]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail
          rewardBracket={1}
          anpanAmount={getAnpanRewards(1)}
          numberWinners={countWinnersPerBracket[1]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail
          rewardBracket={0}
          anpanAmount={getAnpanRewards(0)}
          numberWinners={countWinnersPerBracket[0]}
          isHistoricRound={isHistoricRound}
        />
        <RewardBracketDetail rewardBracket={0} anpanAmount={anpanToBurn} isBurn />
      </RewardsInner>
    </Wrapper>
  )
}

export default RewardBrackets
