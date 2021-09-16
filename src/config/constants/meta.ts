import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AnpanSwap',
  description:
    'The AMM on BSC! Earn ANPAN through yield farming, then stake it in Honey Pools to earn more tokens.',
  image: 'https://anpanswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('AnpanSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('AnpanSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('AnpanSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('AnpanSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('AnpanSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('AnpanSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('AnpanSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('AnpanSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('AnpanSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('AnpanSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('AnpanSwap')}`,
      }
    default:
      return null
  }
}
