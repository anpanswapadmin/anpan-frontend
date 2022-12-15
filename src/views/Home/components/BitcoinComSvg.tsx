import React from 'react'
import { Svg, SvgProps } from '@anpanswap/uikit'

const BitcoinCom: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <path fill="#BDEBE0" d="M0,0h32.1v32.1H0V0z M63.9,63.9H96v32.1H63.9V63.9z"/>
      <path fill="#00C58A" d="M63.8,0h32.1v32.1H63.8V0z"/>
      <path fill="#84DFC4" d="M0,31.9h32.1v32.1H0V31.9z M63.8,31.9h32.1v32.1H63.8V31.9z"/>
      <path fill="#00C58A" d="M0,63.9h32.1V96H0V63.9z"/>
      <path fill="#84DFC4" d="M31.9,63.9H64V96H31.9V63.9z"/>
      <path fill="#00C58A" d="M31.9,31.9H64v32.1H31.9V31.9z"/>
      <path fill="#84DFC4" d="M31.9,0H64v32.1H31.9V0z"/>
    </Svg>
  )
}

export default BitcoinCom
