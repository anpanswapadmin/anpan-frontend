import React from 'react'
import { Text, TooltipText, useTooltip } from '@anpanswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentAnpanProfitBalanceProps {
  anpanToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentAnpanProfitBalance: React.FC<RecentAnpanProfitBalanceProps> = ({
  anpanToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={anpanToDisplay} decimals={3} bold unit=" ANPAN" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={anpanToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentAnpanProfitBalance
