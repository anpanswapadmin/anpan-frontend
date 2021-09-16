import BigNumber from 'bignumber.js'
import { getAnpanAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's ANPAN balance is at least the amount passed in
 */
const useHasAnpanBalance = (minimumBalance: BigNumber) => {
  const { balance: anpanBalance } = useTokenBalance(getAnpanAddress())
  return anpanBalance.gte(minimumBalance)
}

export default useHasAnpanBalance
