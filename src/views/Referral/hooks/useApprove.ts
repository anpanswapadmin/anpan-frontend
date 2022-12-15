import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers, Contract } from 'ethers'
import BigNumber from 'bignumber.js'
import { useAppDispatch } from 'state'
import { updateUserAllowance } from 'state/actions'
import { useTranslation } from 'contexts/Localization'
import { useAnpan, useSousChef, useAnpanVaultContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useLastUpdated from 'hooks/useLastUpdated'

export const useApprovePool = (lpContract: Contract, sousId, earningTokenSymbol) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const tx = await lpContract.approve(sousChefContract.address, ethers.constants.MaxUint256)
      const receipt = await tx.wait()

      dispatch(updateUserAllowance(sousId, account))
      if (receipt.status) {
        toastSuccess(
          t('Contract Enabled'),
          t('You can now stake in the %symbol% pool!', { symbol: earningTokenSymbol }),
        )
        setRequestedApproval(false)
      } else {
        // user rejected tx or didn't go thru
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
    }
  }, [account, dispatch, lpContract, sousChefContract, sousId, earningTokenSymbol, t, toastError, toastSuccess])

  return { handleApprove, requestedApproval }
}

// Approve ANPAN auto pool
export const useVaultApprove = (setLastUpdated: () => void) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const anpanVaultContract = useAnpanVaultContract()
  const anpanContract = useAnpan()

  const handleApprove = async () => {
    const tx = await anpanContract.approve(anpanVaultContract.address, ethers.constants.MaxUint256)
    setRequestedApproval(true)
    const receipt = await tx.wait()
    if (receipt.status) {
      toastSuccess(t('Contract Enabled'), t('You can now stake in the %symbol% vault!', { symbol: 'ANPAN' }))
      setLastUpdated()
      setRequestedApproval(false)
    } else {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setRequestedApproval(false)
    }
  }

  return { handleApprove, requestedApproval }
}

export const useCheckVaultApprovalStatus = () => {
  const [isVaultApproved, setIsVaultApproved] = useState(false)
  const { account } = useWeb3React()
  const anpanContract = useAnpan()
  const anpanVaultContract = useAnpanVaultContract()
  const { lastUpdated, setLastUpdated } = useLastUpdated()
  useEffect(() => {
    const checkApprovalStatus = async () => {
      try {
        const response = await anpanContract.allowance(account, anpanVaultContract.address)
        const currentAllowance = new BigNumber(response.toString())
        setIsVaultApproved(currentAllowance.gt(0))
      } catch (error) {
        setIsVaultApproved(false)
      }
    }

    checkApprovalStatus()
  }, [account, anpanContract, anpanVaultContract, lastUpdated])

  return { isVaultApproved, setLastUpdated }
}
