import BigNumber from 'bignumber.js'
import { convertSharesToAnpan } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import anpanVaultAbi from 'config/abi/anpanVault.json'
import { getAnpanVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestAnpanRewards',
      'calculateTotalPendingAnpanRewards',
    ].map((method) => ({
      address: getAnpanVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedAnpanBountyReward], [totalPendingAnpanHarvest]] = await multicallv2(
      anpanVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalAnpanInVaultEstimate = convertSharesToAnpan(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalAnpanInVault: totalAnpanInVaultEstimate.anpanAsBigNumber.toJSON(),
      estimatedAnpanBountyReward: new BigNumber(estimatedAnpanBountyReward.toString()).toJSON(),
      totalPendingAnpanHarvest: new BigNumber(totalPendingAnpanHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalAnpanInVault: null,
      estimatedAnpanBountyReward: null,
      totalPendingAnpanHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getAnpanVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(anpanVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
