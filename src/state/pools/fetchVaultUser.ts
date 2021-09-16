import BigNumber from 'bignumber.js'
import { getAnpanVaultContract } from 'utils/contractHelpers'

const anpanVaultContract = getAnpanVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await anpanVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      anpanAtLastUserAction: new BigNumber(userContractResponse.anpanAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      anpanAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
