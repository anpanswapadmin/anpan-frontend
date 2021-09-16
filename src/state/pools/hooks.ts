import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { simpleRpcProvider } from 'utils/providers'
import useRefresh from 'hooks/useRefresh'
import {
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
  fetchAnpanVaultPublicData,
  fetchAnpanVaultUserData,
  fetchAnpanVaultFees,
  fetchPoolsStakingLimitsAsync,
} from '.'
import { State, Pool } from '../types'
import { transformPool } from './helpers'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      const blockNumber = await simpleRpcProvider.getBlockNumber()
      dispatch(fetchPoolsPublicDataAsync(blockNumber))
    }

    fetchPoolsPublicData()
    dispatch(fetchPoolsStakingLimitsAsync())
  }, [dispatch, slowRefresh])
}

export const usePools = (account): { pools: Pool[]; userDataLoaded: boolean } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const { pools, userDataLoaded } = useSelector((state: State) => ({
    pools: state.pools.data,
    userDataLoaded: state.pools.userDataLoaded,
  }))
  return { pools: pools.map(transformPool), userDataLoaded }
}

export const useFetchAnpanVault = () => {
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAnpanVaultPublicData())
  }, [dispatch, fastRefresh])

  useEffect(() => {
    dispatch(fetchAnpanVaultUserData({ account }))
  }, [dispatch, fastRefresh, account])

  useEffect(() => {
    dispatch(fetchAnpanVaultFees())
  }, [dispatch])
}

export const useAnpanVault = () => {
  const {
    totalShares: totalSharesAsString,
    pricePerFullShare: pricePerFullShareAsString,
    totalAnpanInVault: totalAnpanInVaultAsString,
    estimatedAnpanBountyReward: estimatedAnpanBountyRewardAsString,
    totalPendingAnpanHarvest: totalPendingAnpanHarvestAsString,
    fees: { performanceFee, callFee, withdrawalFee, withdrawalFeePeriod },
    userData: {
      isLoading,
      userShares: userSharesAsString,
      anpanAtLastUserAction: anpanAtLastUserActionAsString,
      lastDepositedTime,
      lastUserActionTime,
    },
  } = useSelector((state: State) => state.pools.anpanVault)

  const estimatedAnpanBountyReward = useMemo(() => {
    return new BigNumber(estimatedAnpanBountyRewardAsString)
  }, [estimatedAnpanBountyRewardAsString])

  const totalPendingAnpanHarvest = useMemo(() => {
    return new BigNumber(totalPendingAnpanHarvestAsString)
  }, [totalPendingAnpanHarvestAsString])

  const totalShares = useMemo(() => {
    return new BigNumber(totalSharesAsString)
  }, [totalSharesAsString])

  const pricePerFullShare = useMemo(() => {
    return new BigNumber(pricePerFullShareAsString)
  }, [pricePerFullShareAsString])

  const totalAnpanInVault = useMemo(() => {
    return new BigNumber(totalAnpanInVaultAsString)
  }, [totalAnpanInVaultAsString])

  const userShares = useMemo(() => {
    return new BigNumber(userSharesAsString)
  }, [userSharesAsString])

  const anpanAtLastUserAction = useMemo(() => {
    return new BigNumber(anpanAtLastUserActionAsString)
  }, [anpanAtLastUserActionAsString])

  return {
    totalShares,
    pricePerFullShare,
    totalAnpanInVault,
    estimatedAnpanBountyReward,
    totalPendingAnpanHarvest,
    fees: {
      performanceFee,
      callFee,
      withdrawalFee,
      withdrawalFeePeriod,
    },
    userData: {
      isLoading,
      userShares,
      anpanAtLastUserAction,
      lastDepositedTime,
      lastUserActionTime,
    },
  }
}
