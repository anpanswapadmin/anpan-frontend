import { FooterLinkType } from '@anpanswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
/* eslint-disable import/prefer-default-export */
export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.anpanswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.anpanswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.anpanswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/anpanswap?tab=repositories',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.anpanswap.finance',
      },
      {
        label: t('Audits'),
        href: 'https://docs.anpanswap.finance/help/faq#is-anpanswap-safe-has-anpanswap-been-audited',
      },
    ],
  },
  {
    label: t('About'),
    items: [
      {
        label: t('Contact-Us'),
        href: 'https://docs.anpanswap.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://anpanswap.medium.com',
      },
      {
        label: t('Community'),
        href: 'https://docs.anpanswap.finance/contact-us/telegram',
      },
      {
        label: t('ANPAN token'),
        href: 'https://docs.anpanswap.finance/tokenomics/anpan',
      },
    ],
  },
]
