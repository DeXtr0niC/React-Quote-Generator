import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import QuoteBox from './QuoteBox'
import { backgroundColors } from '../styles/backgroundColors'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.colors.primary || '#bdbb99'};
  color: #333;
`

const StyledRandomQuoteGenerator = styled.div`
  border-radius: 3px;
  width: 60%;
  min-width: 30em;
  max-width: 1800px;
  height: 50%;
  min-height: 5em;
  max-height: 863px;
  margin: 0 auto;
  padding: 40px 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
  const colors = backgroundColors
  const [currentColors, setCurrentColors] = useState({
    primary: '',
    secondary: '',
  })

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

      setCurrentIdx(getRandomIndex(quotes))
      setCurrentColors({
        primary: colors[getRandomIndex(colors)],
        secondary: colors[getRandomIndex(colors)],
      })
      setIsLoading(false)
    }
    fetchQuotes()
  }, [colors])

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length - 1)
  }

  // Click-handler for new quote button
  const newQuoteHandler = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setCurrentIdx(getRandomIndex(quoteList))
    setCurrentColors({
      primary: colors[getRandomIndex(colors)],
      secondary: colors[getRandomIndex(colors)],
    })
    setIsLoading(false)
  }

  useEffect(() => {
    setCurrentQuote(quoteList[currentIdx])
  }, [currentIdx, quoteList])

  return (
    <Wrapper colors={currentColors}>
      <StyledRandomQuoteGenerator>
        <QuoteBox
          currentQuote={currentQuote}
          newQuoteHandler={newQuoteHandler}
          isLoading={isLoading}
        />
      </StyledRandomQuoteGenerator>
    </Wrapper>
  )
}

export default RandomQuoteGenerator
