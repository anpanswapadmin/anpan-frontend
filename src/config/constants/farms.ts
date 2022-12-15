import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'ANPAN',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x10B0a78520fBDDa95aDc331445d9319B164F85D5',
    },
    token: tokens.honey,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ANPAN-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x7DEa1496F163f5ab7272ED2Ba67C0AD104462165',
    },
    token: tokens.anpan,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x14fA5493E17Aad701E3d59d90fB6D2814a39A176',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ANPAN-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x15e7a1aC8B7d78a2CB315755245Be07Db309Faa7',
    },
    token: tokens.anpan,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0c9141Dd154B61fE9872833bBd8184f86539A7AF',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdfc85ac0a011c645b67684de98b7f47e2f9ff63b',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 7,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x90b36d439f01aab8d3d0492b1977eaaab789aed5',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
]

export default farms