import BigNumber from 'bignumber.js'
import { LotteryResponse, LotteryRound, LotteryRoundUserTickets } from 'state/types'

/**
 * Remove the '1' and reverse the digits in a lottery number retreived from the smart contract
 */
export const parseRetreivedNumber = (number: string): string => {
  const numberAsArray = number.split('')
  numberAsArray.splice(0, 1)
  numberAsArray.reverse()
  return numberAsArray.join('')
}

export const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export const timeOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
}

export const dateTimeOptions: Intl.DateTimeFormatOptions = {
  ...dateOptions,
  ...timeOptions,
}

export const processLotteryResponse = (
  lotteryData: LotteryResponse & { userTickets?: LotteryRoundUserTickets },
): LotteryRound => {
  const {
    priceTicketInAnpan: priceTicketInAnpanAsString,
    discountDivisor: discountDivisorAsString,
    amountCollectedInAnpan: amountCollectedInAnpanAsString,
  } = lotteryData

  const discountDivisor = new BigNumber(discountDivisorAsString)
  const priceTicketInAnpan = new BigNumber(priceTicketInAnpanAsString)
  const amountCollectedInAnpan = new BigNumber(amountCollectedInAnpanAsString)

  return {
    isLoading: lotteryData.isLoading,
    userTickets: lotteryData.userTickets,
    status: lotteryData.status,
    startTime: lotteryData.startTime,
    endTime: lotteryData.endTime,
    priceTicketInAnpan,
    discountDivisor,
    treasuryFee: lotteryData.treasuryFee,
    firstTicketId: lotteryData.firstTicketId,
    lastTicketId: lotteryData.lastTicketId,
    amountCollectedInAnpan,
    finalNumber: lotteryData.finalNumber,
    anpanPerBracket: lotteryData.anpanPerBracket,
    countWinnersPerBracket: lotteryData.countWinnersPerBracket,
    rewardsBreakdown: lotteryData.rewardsBreakdown,
  }
}
