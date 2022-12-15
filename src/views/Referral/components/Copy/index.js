import React from 'react'
import styled from 'styled-components'
import { CheckCircle, Copy } from 'react-feather'
import  {useCopyClipboard}  from '../../hooks/useCopyClipboard'

const CopyIcon = styled.div`
  color: #aeaeae;
  flex-shrink: 0;
  margin-right: 1rem;
  margin-left: 0.5rem;
  text-decoration: none;
  :hover,
  :active,
  :focus {
    text-decoration: none;
    opacity: 0.8;
    cursor: pointer;
  }
`
const TransactionStatusText = styled.span`
  margin-left: 0.25rem;
  ${({ theme }) => theme.flexRowNoWrap};
  align-items: center;
  color: black;
`

export default function CopyHelper({ toCopy }) {
  const [isCopied, setCopied] = useCopyClipboard()

  return (
    <CopyIcon onClick={() => setCopied(toCopy)}>
      {isCopied ? (
        <TransactionStatusText>

            <CheckCircle size='14' />

        </TransactionStatusText>
      ) : (
        <TransactionStatusText>

            <Copy size='14' />

        </TransactionStatusText>
      )}
    </CopyIcon>
  )
}
