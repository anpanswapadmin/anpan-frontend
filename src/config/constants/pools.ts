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
]

export default pools
