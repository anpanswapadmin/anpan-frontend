/* eslint-disable import/prefer-default-export */
import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hasAnpanPoolToCollect: boolean,
  earningsBusd: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsBusd: earningsBusd.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsBusd% to collect', data)

  if (numFarmsToCollect > 0 && hasAnpanPoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsBusd% to collect from %count% farms and ANPAN pool', data)
    } else {
      earningsText = t('%earningsBusd% to collect from %count% farm and ANPAN pool', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsBusd% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsBusd% to collect from %count% farm', data)
    }
  } else if (hasAnpanPoolToCollect) {
    earningsText = t('%earningsBusd% to collect from ANPAN pool', data)
  }

  return earningsText
}
