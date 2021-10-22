import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Card, Button } from '@anpanswap/uikit'
import { harvestFarm } from 'utils/calls'
import { useTranslation } from 'contexts/Localization'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import AnpanHarvestBalance from './AnpanHarvestBalance'


const StyledFarmStakingCard = styled(Card)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  min-width: 232px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
  margin-bottom: 8px;
`

const Actions = styled.div`
  margin-top: 8px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [balancesWithValue, masterChefContract, toastError, t])

  return (
    <StyledFarmStakingCard>
          <Label>{t('ANPAN to Harvest')}:</Label>
          <AnpanHarvestBalance farmsWithBalance={balancesWithValue} />
        <Actions>
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
              height="22px"
            >
              {pendingTx
                ? t('Collecting ANPAN')
                : t('Harvest all (%count%)', {
                    count: balancesWithValue.length,
                  })}
            </Button>
        </Actions>
      
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
