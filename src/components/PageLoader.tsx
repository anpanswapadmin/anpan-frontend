import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const pulse = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
`

const Wrapper = styled.div`
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${(props) => css`height: 180px;`}
`

const AnimatedImg = styled.div`
  animation: ${pulse} 800ms linear infinite;
  & > * {
    width: 72px;
  }
`

const PageLoader = ({ fill }) => {
  return (
    <Wrapper>
      <AnimatedImg>
        <img src='./logo.png' alt="loading-icon" />
      </AnimatedImg>
    </Wrapper>
  )
}

export default PageLoader