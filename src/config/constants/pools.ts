import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.anpan,
    earningToken: tokens.anpan,
    contractAddress: {
      97: '',
      56: '0xba20f49A294a110A959C931A8aE4e6fD3Cb7014B',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
