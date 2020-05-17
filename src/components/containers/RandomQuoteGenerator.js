import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import QuoteBox from './QuoteBox'

const StyledRandomQuoteGenerator = styled.div`
  border-radius: 3px;
  width: 60%;
  min-width: 30em;
  max-width: 1800px;
  height: 50%;
  min-height: 5em;
  max-height: 863px;
  margin: 0 auto;
  padding: 40px 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #BDBB99;
  
  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`
/* TODO Fetch quotes from API.
  When first visiting, fetch Quotes form API and save in localStorage. 'New Quote' pulls random Quote from localStorage. */

  // TODO Add Fade Effect
  // TODO Make quotes starable. Show fav quotes in side.
  // TODO Add own quotes
  // TODO fetch just from Own/Fav quotes.

const RandomQuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('1010001001 1101101 11010 101 0.')
  const [currentAuthor, setCurrenAuthor] = useState('Default Author')
  const [isLoading, setIsLoading] = useState(false)

  const newQuoteHandler = null // TODO Add Click Handler to Buttons. setIsLoading true. pull from quotes. set author set quote set isLoading false

  return (
    <StyledRandomQuoteGenerator>
      <QuoteBox quote={currentQuote} author={currentAuthor} newQuoteHandler={newQuoteHandler} isLoading={isLoading} />
    </StyledRandomQuoteGenerator>
  )
}

export default RandomQuoteGenerator

// class RandomQuoteGenerator extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       currentQuote: '1010001001 1101101 11010 101 0' ,
//       currentAuthor: 'default author',
//       isLoading: false,
//       error: null
//     }
//     this.fetchNewQuote = this.fetchNewQuote.bind(this)
//     this.handleNewQuote = this.handleNewQuote.bind(this)
//   }
//
//   componentDidMount () {
//     this.fetchNewQuote()
//   }
//
//   handleNewQuote() {
//     this.setState({isLoading: true})
//     this.fetchNewQuote()
//   }
//
//   fetchNewQuote = () => {
//     fetch(QUOTEAPI)
//     .then(res => {
//       if(res.ok) {
//         return res.json()
//       } else {
//         throw new Error('Could not fetch new quote.')
//       }
//     })
//     .then(
//       (result) => this.setState({currentQuote: result.en, currentAuthor: result.author, isLoading: false})
//     )
//     .catch(error => this.setState({error, isLoading: false}))
//   }
//
//   render () {
//     const {currentQuote, currentAuthor, isLoading, error} = this.state
//
//     if(error) {
//       return (<p>{error.message}</p>)
//     }
//
//     return (
//       <QuoteWrapper isLoading={isLoading} newQuoteHandler={this.handleNewQuote} quote={currentQuote} author={currentAuthor}/>
//     )
//   }
//
// }
