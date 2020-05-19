import React from 'react'
import styled from 'styled-components'

const StyledQuote = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  clear: both;
  font-weight: 500;
  font-size: 1.75em;
`

const QuoteIcon = styled.i`
  font-size: 1em;
  margin: 0 0.4em 0 0.4em;
`

const Quote = ({ quote }) => (
  <StyledQuote>
    <QuoteIcon className='fas fa-quote-left' />
    <span id='text'>{quote}</span>
    <QuoteIcon className='fas fa-quote-right' />
  </StyledQuote>
)

export default Quote
// const Quote  = (props) => (
//     <div}>
//       <i className="fas fa-quote-left"></i>
//       <span id={'text'}>{props.children}</span>
//       <i className="fas fa-quote-right"></i>
//     </div>
// )
