import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import QuoteBox from './QuoteBox'
//import {backgroundColors} from '../styles/backgroundColors'

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
  background-color: #bdbb99;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`

// TODO Add Fade Effect
// TODO Make quotes starable. Show fav quotes in side.
// TODO Add own quotes
// TODO fetch just from Own/Fav quotes.

const RandomQuoteGenerator = () => {
  // TODO Implement Color Change

  const [isLoading, setIsLoading] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [quoteList, setQuoteList] = useState([])
  const [currentQuote, setCurrentQuote] = useState({ quote: '', author: '' })

  // Fetch quotes on first load
  useEffect(() => {
    async function fetchQuotes() {
      setIsLoading(true)
      const response = await fetch(
        'https://programming-quotes-api.herokuapp.com/quotes/'
      )
      const quotes = await response.json()
      setQuoteList(quotes)

      let randomNumber = Math.floor(Math.random() * quotes.length - 1)
      setCurrentIdx(randomNumber)
      setCurrentQuote(quotes[randomNumber])
      setIsLoading(false)
    }
    fetchQuotes()
  }, [])

  const getRandomIndex = () => {
    return Math.floor(Math.random() * quoteList.length - 1)
  }

  // Click-handler for new quote button
  const newQuoteHandler = (event) => {
    event.preventDefault()
    setIsLoading(true)
    let randomIndex = getRandomIndex()
    setCurrentIdx(randomIndex)
    setCurrentQuote(quoteList[randomIndex])
    setIsLoading(false)
  }

  return (
    <StyledRandomQuoteGenerator>
      {
        <QuoteBox
          currentQuote={currentQuote}
          newQuoteHandler={newQuoteHandler}
          isLoading={isLoading}
        />
      }
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
