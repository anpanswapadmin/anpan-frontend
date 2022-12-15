import React from 'react'
import { TokenPairImage, ImageProps } from '@anpanswap/uikit'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'

const AnpanVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${getAddress(tokens.anpan.address)}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default AnpanVaultTokenPairImage
