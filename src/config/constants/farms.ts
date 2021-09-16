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
      56: '0xaca159cec26fa84e33296538d1619166addc4b97',
    },
    token: tokens.honey,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ANPAN-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x9A820014ec8ec38A3CA3fA23262eEb7079018003',
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
    lpSymbol: 'BUSD-ANPAN LP',
    lpAddresses: {
      97: '',
      56: '0x01c1166e8033015e3b05991f5be8bfc86381d649',
    },
    token: tokens.busd,
    quoteToken: tokens.anpan,
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
    pid: 5,
    lpSymbol: 'LUS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x42dfd45648891ddfde9c9e332a72fdad117ac309',
    },
    token: tokens.lus,
    quoteToken: tokens.wbnb,
  },

  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  /**
   * All farms below here are from v1 and are to be set to 0x
   */
]

export default farms