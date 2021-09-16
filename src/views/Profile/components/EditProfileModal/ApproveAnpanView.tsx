import React, { useState } from 'react'
import { AutoRenewIcon, Button, Flex, InjectedModalProps, Text } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useAnpan } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { useProfile } from 'state/hooks'
import { getAnpansProfileAddress } from 'utils/addressHelpers'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useGetProfileCosts from 'views/Profile/hooks/useGetProfileCosts'
import { UseEditProfileResponse } from './reducer'

interface ApproveAnpanPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
}

const ApproveAnpanPage: React.FC<ApproveAnpanPageProps> = ({ goToChange, onDismiss }) => {
  const [isApproving, setIsApproving] = useState(false)
  const { profile } = useProfile()
  const { t } = useTranslation()
  const { numberAnpanToUpdate, numberAnpanToReactivate } = useGetProfileCosts()
  const anpanContract = useAnpan()
  const { toastError } = useToast()
  const cost = profile.isActive ? numberAnpanToUpdate : numberAnpanToReactivate

  const handleApprove = async () => {
    const tx = await anpanContract.approve(getAnpansProfileAddress(), cost.times(2).toJSON())
    setIsApproving(true)
    const receipt = await tx.wait()
    if (receipt.status) {
      goToChange()
    } else {
      toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      setIsApproving(false)
    }
  }

  if (!profile) {
    return null
  }

  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between" mb="24px">
        <Text>{profile.isActive ? t('Cost to update:') : t('Cost to reactivate:')}</Text>
        <Text>{getFullDisplayBalance(cost)} ANPAN</Text>
      </Flex>
      <Button
        disabled={isApproving}
        isLoading={isApproving}
        endIcon={isApproving ? <AutoRenewIcon spin color="currentColor" /> : null}
        width="100%"
        mb="8px"
        onClick={handleApprove}
      >
        {t('Enable')}
      </Button>
      <Button variant="text" width="100%" onClick={onDismiss} disabled={isApproving}>
        {t('Close Window')}
      </Button>
    </Flex>
  )
}

export default ApproveAnpanPage
