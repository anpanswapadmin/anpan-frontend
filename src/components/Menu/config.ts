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
        href: 'https://anpanswap.info',
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
        label: t('Contact-Us'),
        href: 'https://docs.anpanswap.finance/#/contact-us/telegram',
      },
]

export default config
