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
    setIsLoading(false)
  }

  useEffect(() => {
    setCurrentQuote(quoteList[currentIdx])
  }, [currentIdx, quoteList])

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
