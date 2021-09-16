import { AnpanSectionProps } from '.'

export const anpanSectionData: AnpanSectionProps = {
  headingText: 'ANPAN Tokenomics & Total Value Locked.',
  bodyText:
    'ANPAN token is at the heart of the AnpanSwap ecosystem. Buy it, spend it, stake it, win it...',
  foot1Text: '23 millions of Anpan was minted and the owner that governs Anpan was transferred to "MasterChef" Smart Contract to open Farms and Pools (MasterChef governs minting Anpan rewards as well as burning Anpan). And Ownership forever cannot be transferred outside of MasterChef contract.',
  foot2Text: '23 millions of Anpan is used for private sales (12 millions) with price is 0.09$ and public sales (11 millions) with price is 0.12$ in order to get fund for marketing, major DEX & CEX listing, and Liquidity adding.',
  foot3Text: 'Anpan is minted 40 tokens per block but only 19 Anpan/block is minted for farms (9) & pool (10)...',
  reverse: false,
  
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/#/tokenomics/anpan/anpan-tokenomics',
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
  foot1Text: '23 millions of Anpan was minted and the owner that governs Anpan was transferred to "MasterChef" Smart Contract to open Farms and Pools (MasterChef governs minting Anpan rewards as well as burning Anpan). And the owner forever cannot be transferred from MasterChef.',
  foot2Text: '23 millions of Anpan is used for private sales (12 millions) with price is 0.09$ and public sales (11 millions) with price is 0.12$ in order to get fund for marketing, major DEX & CEX listing, and Liquidity adding.',
  foot3Text: 'Anpan is minted 40 tokens per block but only 19 Anpan/block is minted for farms (9) & pool (10)...',
  reverse: false,
  
  secondaryButton: {
    to: 'https://docs.anpanswap.finance/#/tokenomics/anpan/anpan-tokenomics',
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