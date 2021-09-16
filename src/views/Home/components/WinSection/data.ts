import { WinSectionProps } from '.'

export const predictionSectionData: WinSectionProps = {
  headingText: 'Win millions in prizes with Prediction.',
  bodyText: 'Will BNB price rise or fall? guess correctly to win!',
  footText: 'Coming Soon',
  reverse: true,
  images: {
    path: '/images/home/prediction/',
    attributes: [

      { src: 'ANPAN', alt: 'ANPAN token' },
    ],
  },
}

export const lotterySectionData: WinSectionProps = {
  headingText: 'Win millions in prizes with Lottery.',
  bodyText: 'Buy tickets with ANPAN, win ANPAN if your numbers match.',
  footText: 'Coming Soon',
  reverse: false,
  images: {
    path: '/images/home/lottery/',
    attributes: [

      { src: 'pie', alt: 'Pie chart' },

    ],
  },
}
