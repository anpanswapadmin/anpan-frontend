import React from 'react'
import { Flex, Text } from '@anpanswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useAnpanVault, usePriceAnpanBusd } from 'state/hooks'
import { getAnpanVaultEarnings } from 'views/Pools/helpers'
import RecentAnpanProfitBalance from './RecentAnpanProfitBalance'

const RecentAnpanProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { anpanAtLastUserAction, userShares, lastUserActionTime },
  } = useAnpanVault()
  const anpanPriceBusd = usePriceAnpanBusd()
  const { hasAutoEarnings, autoAnpanToDisplay, autoUsdToDisplay } = getAnpanVaultEarnings(
    account,
    anpanAtLastUserAction,
    userShares,
    pricePerFullShare,
    anpanPriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent ANPAN profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentAnpanProfitBalance
          anpanToDisplay={autoAnpanToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentAnpanProfitCountdownRow
