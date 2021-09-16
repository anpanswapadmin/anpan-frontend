import React from 'react'
import BigNumber from 'bignumber.js'
import { Flex, Skeleton, Text } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { usePriceAnpanBusd } from 'state/hooks'
import Balance from 'components/Balance'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'

interface RewardBracketDetailProps {
  anpanAmount: BigNumber
  rewardBracket?: number
  numberWinners?: string
  isBurn?: boolean
  isHistoricRound?: boolean
}

const RewardBracketDetail: React.FC<RewardBracketDetailProps> = ({
  rewardBracket,
  anpanAmount,
  numberWinners,
  isHistoricRound,
  isBurn,
}) => {
  const { t } = useTranslation()
  const anpanPriceBusd = usePriceAnpanBusd()
  const prizeInBusd = anpanAmount.times(anpanPriceBusd)

  const getRewardText = () => {
    const numberMatch = rewardBracket + 1
    if (isBurn) {
      return t('Burn')
    }
    if (rewardBracket === 5) {
      return t('Match all %numberMatch%', { numberMatch })
    }
    return t('Match first %numberMatch%', { numberMatch })
  }

  return (
    <Flex flexDirection="column">
      <Text bold color={isBurn ? 'failure' : 'secondary'}>
        {getRewardText()}
      </Text>
      <>
        {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={12} width={90} />
        ) : (
          <Balance fontSize="20px" bold unit=" ANPAN" value={getBalanceNumber(anpanAmount)} decimals={0} />
        )}
        {prizeInBusd.isNaN() ? (
          <Skeleton my="2px" height={12} width={70} />
        ) : (
          <Balance fontSize="12px" color="textSubtle" prefix="~$" value={getBalanceNumber(prizeInBusd)} decimals={0} />
        )}
        {isHistoricRound && anpanAmount && (
          <>
            {numberWinners !== '0' && (
              <Text fontSize="12px" color="textSubtle">
                {getFullDisplayBalance(anpanAmount.div(parseInt(numberWinners, 10)), 18, 2)} ANPAN {t('each')}
              </Text>
            )}
            <Text fontSize="12px" color="textSubtle">
              {numberWinners} {t('Winners')}
            </Text>
          </>
        )}
      </>
    </Flex>
  )
}

export default RewardBracketDetail
