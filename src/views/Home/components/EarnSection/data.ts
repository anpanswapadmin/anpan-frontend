import { EarnSectionProps } from '.'

export const farmSectionData: EarnSectionProps = {
  headingText: 'Earn passive income with Farms.',
  bodyText: 'Stake Liquidity Pool (LP) token to earn ANPAN on the highest farms.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Join Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/products/yield-farming/how-to-use-farms',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/farm/',
    attributes: [

      { src: 'ANPAN', alt: 'ANPAN token' },
    ],
  },
}

export const poolSectionData: EarnSectionProps = {
  headingText: 'Earn passive income with Honey Pools.',
  bodyText: 'Stake token in Honey Pools to earn ANPAN or other tokens on the best pools.',
  reverse: false,
  primaryButton: {
    to: '/pools',
    text: 'Join Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/products/honey-pool/honey-pool-guide',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/pool/',
    attributes: [

      { src: 'pie', alt: 'Pie chart' },

    ],
  },
}
