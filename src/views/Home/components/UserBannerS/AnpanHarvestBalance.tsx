import React from 'react'
import BigNumber from 'bignumber.js'
import { FarmWithBalance } from 'views/Home/hooks/useFarmsWithBalance'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import CardValue from './CardValue'

interface AnpanHarvestBalanceProps {
  farmsWithBalance: FarmWithBalance[]
}

const AnpanHarvestBalance: React.FC<AnpanHarvestBalanceProps> = ({ farmsWithBalance }) => {
  const earningsSum = farmsWithBalance.reduce((accum, earning) => {
    const earningNumber = new BigNumber(earning.balance)
    if (earningNumber.eq(0)) {
      return accum
    }
    return accum + earningNumber.div(DEFAULT_TOKEN_DECIMAL).toNumber()
  }, 0)

  return (
      <CardValue value={earningsSum} lineHeight="16px" />
  )
}

export default AnpanHarvestBalance
