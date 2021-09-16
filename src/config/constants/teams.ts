import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'Honey Storm',
    description: "The storm's a-comin! Watch out! These bulls are stampeding in a honeyy surge!",
    images: {
      lg: 'honey-storm-lg.png',
      md: 'honey-storm-md.png',
      sm: 'honey-storm-sm.png',
      alt: 'honey-storm-alt.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/honey-storm.png',
    },
    background: 'honey-storm-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
  {
    id: 2,
    name: 'Fearsome Flippers',
    description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
    images: {
      lg: 'fearsome-flippers-lg.png',
      md: 'fearsome-flippers-md.png',
      sm: 'fearsome-flippers-sm.png',
      alt: 'fearsome-flippers-alt.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png',
    },
    background: 'fearsome-flippers-bg.svg',
    textColor: '#FFFFFF',
    users: 0,
    points: 0,
  },
  {
    id: 3,
    name: 'Chaotic Anpaners',
    description: 'Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!',
    images: {
      lg: 'chaotic-anpaners-lg.png',
      md: 'chaotic-anpaners-md.png',
      sm: 'chaotic-anpaners-sm.png',
      alt: 'chaotic-anpaners-alt.png',
      ipfs: 'https://cloudflare-ipfs.com/ipfs/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-anpaners.png',
    },
    background: 'chaotic-anpaners-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
]

export default teams
