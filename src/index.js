import React from 'react'
import ReactDOM from 'react-dom'

class RandomQuoteGenerator extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <QuoteWrapper />
    )
  }

}

function Quote (props) {
  return (
    <p id={'text'}>"{props.children}"</p>
  )
}

function Author (props) {
  return (
    <p id={'author'}>- {props.children}</p>
  )
}
function Button(props) {
  return (
    <button id={props.id} onClick={props.onClick}>{props.children}</button>
  )
}

function QuoteWrapper(props) {
  return (
    <div id={'quote-box'}>
      <Quote>LOREM IPSUM DOLOR SIT AMET.</Quote>
      <Author>HANS MEISER</Author>
      <Button id={'new-quote'}>New Quote</Button>
      <a href={'#'} id={'tweet-quote'}>Tweet!</a>
    </div>

  )
}

// ========================================

ReactDOM.render(
  <RandomQuoteGenerator/>,
  document.getElementById('root'),
)

