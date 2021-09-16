import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { useSpecialBunnyAnpanVaultContract } from 'hooks/useContract'
import { getBunnySpecialAnpanVaultContract } from 'utils/contractHelpers'
import NftCard, { NftCardProps } from './index'

const BunnySpecialAnpanVaultCard: React.FC<NftCardProps> = ({ nft, ...props }) => {
  const [isClaimable, setIsClaimable] = useState(false)
  const { account } = useWeb3React()
  const bunnySpecialAnpanVaultContract = useSpecialBunnyAnpanVaultContract()
  const { variationId } = nft

  const handleClaim = async () => {
    const response: ethers.providers.TransactionResponse = await bunnySpecialAnpanVaultContract.mintNFT()
    await response.wait()
    setIsClaimable(false)
    return response
  }

  useEffect(() => {
    const fetchClaimStatus = async () => {
      const contract = getBunnySpecialAnpanVaultContract()
      const canClaim = await contract.canClaim(account)
      setIsClaimable(canClaim)
    }

    if (account) {
      fetchClaimStatus()
    }
  }, [account, variationId, bunnySpecialAnpanVaultContract, setIsClaimable])

  return <NftCard nft={nft} {...props} canClaim={isClaimable} onClaim={handleClaim} />
}

export default BunnySpecialAnpanVaultCard
