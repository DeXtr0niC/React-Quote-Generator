import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'


// MAIN COMPONENT
class RandomQuoteGenerator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuote: 'In order to succeed, your desire for success should be greater than your fear of failure.' ,
      currentAuthor: 'default author'
    }
    this.fetchNewQuote = this.fetchNewQuote.bind(this)
  }

  fetchNewQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(res => res.json())
    .then(
      (result) => this.setState({currentQuote: result.en, currentAuthor: result.author})
    )
  }

  render () {
    return (
      <QuoteWrapper newQuoteHandler={this.fetchNewQuote} quote={this.state.currentQuote} author={this.state.currentAuthor}/>
    )
  }

}

// CONTAINER COMPONENT
function QuoteWrapper(props) {
  return (
    <div id={'quote-box'}>
      <Quote>{props.quote}</Quote>
      <Author>{props.author}</Author>
      <ButtonBar>
        <TwitterButton currentQuote={[props.quote, props.author]}/>
        <NewQuoteButton clickHandler={props.newQuoteHandler}/>
      </ButtonBar>
    </div>

  )
}
// SMALLER STATELESS COMPONENTS
let Quote  = (props) => (
  <div className={'quote-text'}>
    <i className="fas fa-quote-left"></i>
    <span id={'text'}>{props.children}</span>
    <i className="fas fa-quote-right"></i>
  </div>
)

let Author = (props) => (
  <div className={'quote-author'}>
    - <span id={'author'}>{props.children}</span>
  </div>
)

let ButtonBar = (props) => (
  <div id={'buttonbar'}>{props.children}</div>
)

let IconButton = (props) => (
  <div {...props} className={'button'} >{props.children}</div>
)

function TwitterButton(props) {
  let uri = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.currentQuote[0] + '" ' + props.currentQuote[1])
  return (
    <IconButton id={'twitter-button'} title={'Tweet this quote!'}>
      <a id={'tweet-quote'} target={'_blank'} href={uri}> <i className="fab fa-twitter"></i></a>
    </IconButton>
  )
}

function NewQuoteButton (props) {
  return (
      <button id={'new-quote'} title='Get a new quote!' onClick={props.clickHandler} className={'button'}>New Quote</button>
  )
}




// ========================================

ReactDOM.render(
  <RandomQuoteGenerator/>,
  document.getElementById('root'),
)

