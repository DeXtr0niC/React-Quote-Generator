import React from 'react'
import styled from 'styled-components'

import Quote from '../Quote'
import Author from '../Author'
import Buttonbar from './Buttonbar'
import {
  TwitterButton,
  NewQuoteButton
} from '../Button'

const StyledQuoteBox = styled.div`
  width: 100%;
  border-radius:3px;
  position:relative;
  margin: 8% auto auto auto;
  padding:40px 50px;
  background-color:#fff;
  flex: 2 1 100%;
  display: flex;
  flex-direction: column;
`

const QuoteBox = ({ quote, author, newQuoteHandler, isLoading }) => {
  if (isLoading) {
    return (
      <StyledQuoteBox>
        Loading...
      </StyledQuoteBox>
    )
  }

  return (
    <StyledQuoteBox>
      <Quote quote={quote} />
      <Author author={author} />
      <Buttonbar>
        <TwitterButton as='div' currentQuote={quote} currentAuthor={author} />
        <NewQuoteButton clickHandler={newQuoteHandler} />
      </Buttonbar>
    </StyledQuoteBox>
  )
}

export default QuoteBox

// function QuoteWrapper(props) {
//   if(props.isLoading) {
//     return (
//       <div id={'quote-box'}>
//         Loading...
//       </div>
//     )
//   }
//   return (
//     <div id={'quote-box'}>
//       <Quote>{props.quote}</Quote>
//       <Author>{props.author}</Author>
//       <ButtonBar>
//         <TwitterButton currentQuote={[props.quote, props.author]}/>
//         <NewQuoteButton clickHandler={props.newQuoteHandler}/>
//       </ButtonBar>
//     </div>
//   )
// }
