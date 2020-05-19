import React from 'react'
import styled from 'styled-components'

import Quote from '../Quote'
import Author from '../Author'
import Buttonbar from './Buttonbar'
import { TwitterButton, NewQuoteButton } from '../Button'

const StyledQuoteBox = styled.div`
  width: 100%;
  border-radius: 3px;
  position: relative;
  margin: 8% auto auto auto;
  padding: 40px 50px;
  background-color: #fff;
  flex: 2 1 100%;
  display: flex;
  flex-direction: column;
`

const QuoteBox = ({ currentQuote, newQuoteHandler, isLoading }) => {
  if (isLoading) {
    return <StyledQuoteBox>Loading...</StyledQuoteBox>
  }

  return (
    <StyledQuoteBox>
      <Quote quote={currentQuote.en} />
      <Author author={currentQuote.author} />
      <Buttonbar>
        <TwitterButton as='div' currentQuote={currentQuote} />
        <NewQuoteButton clickHandler={newQuoteHandler} />
      </Buttonbar>
    </StyledQuoteBox>
  )
}

export default QuoteBox
