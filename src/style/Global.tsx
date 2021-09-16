import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { AnpansTheme } from '@anpanswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends AnpansTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Comic Sans MS', cursive;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
