import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.anpan,
    earningToken: tokens.anpan,
    contractAddress: {
      97: '',
      56: '0x305e193c7b6955564d0d3d35d918ff1f27f3a610',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.anpan,
    earningToken: tokens.lus,
    contractAddress: {
      97: '',
      56: '0xe6Ab79E8506A7F4dC0f9b3Ba49F64fb242F6cEbd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.9672',
  },
]

export default pools
