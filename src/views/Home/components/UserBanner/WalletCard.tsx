import React from 'react'
import styled from 'styled-components'
import { Card } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'

import AnpanWalletBalance from './AnpanWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  min-width: 232px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
  margin-bottom: 22px;
`

const WalletCard = () => {
  
  const { t } = useTranslation()
 
  return (
    <StyledFarmStakingCard>
          <Label>{t('ANPAN in Wallet')}:</Label>
          <AnpanWalletBalance />
    </StyledFarmStakingCard>
  )
}

export default WalletCard
