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
      56: '0xfeca27a665dae2cd212a251a1fa7aa8037495b20',
    },
    token: tokens.honey,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ANPAN-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x57E5e7613cca551E9E40F56bAF52FEB891a33737',
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
      56: '0xfa6aEacFE0aaF9c21c16Dc94983e07dba30f8866',
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
]

export default farms