import React from 'react'
import useTokenBalance from 'hooks/useTokenBalance'
import { getAnpanAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const AnpanWalletBalance = () => {
  const { balance: anpanBalance } = useTokenBalance(getAnpanAddress())

  return (
    <>
      <CardValue value={getBalanceNumber(anpanBalance)} decimals={2} fontSize="16px" lineHeight="16px" />
     
    </>
  )
}

export default AnpanWalletBalance
