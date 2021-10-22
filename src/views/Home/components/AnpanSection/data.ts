import { AnpanSectionProps } from '.'

export const anpanSectionData: AnpanSectionProps = {
  headingText: 'ANPAN Tokenomics & Total Value Locked.',
  bodyText:
    'ANPAN token is at the heart of the AnpanSwap ecosystem. Buy it, spend it, stake it, win it...',
  foot1Text: '49 millions of Anpan was minted and Ownership was transferred to MasterChef Smart Contract, as well as to open Farms and ANPAN Manual Pool. Ownership cannot be transferred outside of MasterChef contract.',
  foot2Text: '21 millions of Anpan was staked in Manual ANPAN Pool under Honey Pools, and they will be burned once the ANPAN Manual Pool is officially opened.',
  foot3Text: '12 millions of Anpan is for private sales (0.09$) and 9 millions is for public sales (0.12$). The generated funds will be deployed to add Liquidity and support the Marketing strategy of AnpanSwap.',
  foot4Text: '6 millions of Anpan is for DEX and CEX listing, and 1 million is for Airdrop.',
  foot5Text: 'Emissions is 29 Anpan/block (Honey Pool: 7.25/block and Farms: 21.75/block). Once launching other products (Lottery, ...), Anpan will be shared from Farms allocation.',
  foot6Text: 'Emissions will be reduced 1 Anpan/block per month from Farms allocation by burning. All Anpans minted from Burn Farm/ Manual ANPAN Pool in the pre-opening period will also be burned.',
  reverse: false,
  
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/tokenomics/anpan',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/anpan/',
    attributes: [
      { src: 'coin', alt: 'ANPAN token' },
    ],
  },
}

export const anpanSectionDataA: AnpanSectionProps = {
  headingText: 'ANPAN Tokenomics & Total Value Locked.',
  bodyText:
    'ANPAN token is at the heart of the AnpanSwap ecosystem. Buy it, spend it, stake it, win it...',
    foot1Text: '49 millions of Anpan was minted and Ownership was transferred to "MasterChef" Smart Contract, and to open Farms and Pools. Ownership cannot be transferred outside of MasterChef contract.',
    foot2Text: '21 millions of Anpan was staked into Honey Pool (Manual ANPAN pool) and will be burned once official openning "Manual ANPAN pool".',
    foot3Text: '21 millions of Anpan is used for private sales (12 millions with price is 0.09$) and public sales (9 millions with price is 0.12$). The generated funds will be deployed to add Liquidity and support the Marketing strategy of AnpanSwap.',
    foot4Text: '6 millions of Anpan is for DEX & CEX listing and for Airdrop (1 millions).',
    foot5Text: 'Emissions is 29 Anpan/block (Honey Pool: 7.25/block and Farms: 21.75/block at official openning all Farms/ Honey Pools).',
    foot6Text: 'Monthly emissions will be reduced 1 Anpan/block from Farms by burning. All Anpans minted from AnpanSwap Farms/ Manual ANPAN pool before openning will be burned.',
  reverse: false,
  
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/tokenomics/anpan',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/anpan/',
    attributes: [
      { src: 'coin', alt: 'ANPAN token' },
    ],
  },
}