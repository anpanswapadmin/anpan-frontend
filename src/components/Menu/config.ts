import { MenuEntry } from '@anpanswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
      {
        label: t('Home'),
        href: '/',
      },
      {
        label: t('Swap'),
        href: 'https://exchange.anpanswap.finance/#/swap',
      },
      {
        label: t('Liquidity'),
        href: 'https://exchange.anpanswap.finance/#/pool',
      },
      {
        label: t('Analytics'),
        href: 'https://info.anpanswap.finance/',
      },
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Stake'),
        href: '/pools',
      },
      {
        label: t('Prediction'),
        href: '/prediction',
      },
      {
        label: t('Whitepaper'),
        href: 'https://whitepaper.anpanswap.finance/whitepaper.pdf',
      },
]

export default config
