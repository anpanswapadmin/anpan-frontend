import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Button, Flex, Text, InjectedModalProps } from '@anpanswap/uikit'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { getAnpansProfileAddress } from 'utils/addressHelpers'
import { useAnpan } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import useGetProfileCosts from 'views/Profile/hooks/useGetProfileCosts'
import useHasAnpanBalance from 'hooks/useHasAnpanBalance'
import { useProfile } from 'state/hooks'
import { UseEditProfileResponse } from './reducer'
import ProfileAvatar from '../ProfileAvatar'

interface StartPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
  goToRemove: UseEditProfileResponse['goToRemove']
  goToApprove: UseEditProfileResponse['goToApprove']
}

const DangerOutline = styled(Button).attrs({ variant: 'secondary' })`
  border-color: ${({ theme }) => theme.colors.failure};
  color: ${({ theme }) => theme.colors.failure};
  margin-bottom: 24px;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-color: ${({ theme }) => theme.colors.failure};
    opacity: 0.8;
  }
`

const AvatarWrapper = styled.div`
  height: 64px;
  width: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 128px;
    width: 128px;
  }
`

const StartPage: React.FC<StartPageProps> = ({ goToApprove, goToChange, goToRemove, onDismiss }) => {
  const [needsApproval, setNeedsApproval] = useState(null)
  const { profile } = useProfile()
  const { numberAnpanToUpdate, numberAnpanToReactivate } = useGetProfileCosts()
  const minimumAnpanRequired = profile.isActive ? numberAnpanToUpdate : numberAnpanToReactivate
  const hasMinimumAnpanRequired = useHasAnpanBalance(minimumAnpanRequired)
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const anpanContract = useAnpan()
  const cost = profile.isActive ? numberAnpanToUpdate : numberAnpanToReactivate

  /**
   * Check if the wallet has the required ANPAN allowance to change their profile pic or reactivate
   * If they don't, we send them to the approval screen first
   */
  useEffect(() => {
    const checkApprovalStatus = async () => {
      const response = await anpanContract.allowance(account, getAnpansProfileAddress())
      const currentAllowance = new BigNumber(response.toString())
      setNeedsApproval(currentAllowance.lt(cost))
    }

    if (account) {
      checkApprovalStatus()
    }
  }, [account, cost, setNeedsApproval, anpanContract])

  if (!profile) {
    return null
  }

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <AvatarWrapper>
        <ProfileAvatar profile={profile} />
      </AvatarWrapper>
      <Flex alignItems="center" style={{ height: '48px' }} justifyContent="center">
        <Text as="p" color="failure">
          {!hasMinimumAnpanRequired &&
            t('%minimum% ANPAN required to change profile pic', { minimum: getFullDisplayBalance(minimumAnpanRequired) })}
        </Text>
      </Flex>
      {profile.isActive ? (
        <>
          <Button
            width="100%"
            mb="8px"
            onClick={needsApproval === true ? goToApprove : goToChange}
            disabled={!hasMinimumAnpanRequired || needsApproval === null}
          >
            {t('Change Profile Pic')}
          </Button>
          <DangerOutline width="100%" onClick={goToRemove}>
            {t('Remove Profile Pic')}
          </DangerOutline>
        </>
      ) : (
        <Button
          width="100%"
          mb="8px"
          onClick={needsApproval === true ? goToApprove : goToChange}
          disabled={!hasMinimumAnpanRequired || needsApproval === null}
        >
          {t('Reactivate Profile')}
        </Button>
      )}
      <Button variant="text" width="100%" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Flex>
  )
}

export default StartPage
