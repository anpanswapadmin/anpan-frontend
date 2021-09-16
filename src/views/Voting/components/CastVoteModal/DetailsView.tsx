import React from 'react'
import { Text, Flex } from '@anpanswap/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { VotingBox, ModalInner } from './styles'

interface DetailsViewProps {
  total: BigNumber
  anpanBalance: BigNumber
  anpanVaultBalance: BigNumber
  anpanPoolBalance: BigNumber
  poolsBalance: BigNumber
  anpanBnbLpBalance: BigNumber
}

const DetailsView: React.FC<DetailsViewProps> = ({
  total,
  anpanBalance,
  anpanVaultBalance,
  anpanPoolBalance,
  poolsBalance,
  anpanBnbLpBalance,
}) => {
  const { t } = useTranslation()

  return (
    <ModalInner mb="0">
      <Text as="p" mb="24px" fontSize="14px" color="textSubtle">
        {t(
          'Your voting power is determined by the amount of ANPAN you held at the block detailed below. ANPAN held in other places does not contribute to your voting power.',
        )}
      </Text>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Overview')}
      </Text>
      <VotingBox>
        <Text color="secondary">{t('Your Voting Power')}</Text>
        <Text bold fontSize="20px">
          {total.toFormat(3)}
        </Text>
      </VotingBox>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Your Anpan Held Now')}
      </Text>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Wallet')}
        </Text>
        <Text textAlign="right">{anpanBalance.toFormat(3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Manual ANPAN Pool')}
        </Text>
        <Text textAlign="right">{anpanPoolBalance.toFormat(3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Auto ANPAN Pool')}
        </Text>
        <Text textAlign="right">{anpanVaultBalance.toFormat(3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('Other Honey Pools')}
        </Text>
        <Text textAlign="right">{poolsBalance.toFormat(3)}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mb="4px">
        <Text color="textSubtle" fontSize="16px">
          {t('ANPAN BNB LP')}
        </Text>
        <Text textAlign="right">{anpanBnbLpBalance.toFormat(3)}</Text>
      </Flex>
    </ModalInner>
  )
}

export default DetailsView
