import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

// ==== CONSTANTS ====

const QUOTEAPI = "https://programming-quotes-api.herokuapp.com/quotes/random"

// ==== MAIN COMPONENT ====

class RandomQuoteGenerator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentQuote: '1010001001 1101101 11010 101 0' ,
      currentAuthor: 'default author',
      isLoading: false,
      error: null
    }
    this.fetchNewQuote = this.fetchNewQuote.bind(this)
    this.handleNewQuote = this.handleNewQuote.bind(this)
  }

  componentDidMount () {
    this.fetchNewQuote()
  }

  handleNewQuote() {
    this.setState({isLoading: true})
    this.fetchNewQuote()
  }

  fetchNewQuote = () => {
    fetch(QUOTEAPI)
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        throw new Error('Could not fetch new quote.')
      }
    })
    .then(
      (result) => this.setState({currentQuote: result.en, currentAuthor: result.author, isLoading: false})
    )
      .catch(error => this.setState({error, isLoading: false}))
  }

  render () {
    const {currentQuote, currentAuthor, isLoading, error} = this.state

    if(error) {
      return (<p>{error.message}</p>)
    }

    return (
      <QuoteWrapper isLoading={isLoading} newQuoteHandler={this.handleNewQuote} quote={currentQuote} author={currentAuthor}/>
    )
  }

}

// ==== CONTAINER COMPONENTS ====

function QuoteWrapper(props) {
  if(props.isLoading) {
    return (
      <div id={'quote-box'}>
        Loading...
      </div>
    )
  }
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

let ButtonBar = (props) => <div id={'buttonbar'}>{props.children}</div>

// ==== TEMPLATE COMPONENTS ====

let IconButton = (props) => <div {...props} className={'button'} >{props.children}</div>

class FadingComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fade: false
    }
  }

  componentDidMount () {
    this.setState({fade: true})
  }

  render () {
    const fade = this.state.fade
    return (
      <div className={fade ? 'fade' : ''} onAnimationEnd={() => this.setState({fade: false})}>{this.props.children}</div>
    )
  }

}

// ==== SMALLER STATELESS COMPONENTS ====
let Quote  = (props) => (
  <FadingComponent fade={props.fade}>
    <div className={'quote-text'}>
     <i className="fas fa-quote-left"></i>
      <span id={'text'}>{props.children}</span>
     <i className="fas fa-quote-right"></i>
    </div>
  </FadingComponent>
)

let Author = (props) => (
  <FadingComponent>
   <div className={'quote-author'}>
     - <span id={'author'}>{props.children}</span>
   </div>
  </FadingComponent>
)



function TwitterButton(props) {
  let uri = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.currentQuote[0] + '" ' + props.currentQuote[1])
  return (
    <IconButton id={'twitter-button'} title={'Tweet this quote!'}>
      <a id={'tweet-quote'} target={'_blank'}  rel="noopener noreferrer" href={uri}> <i className="fab fa-twitter"></i></a>
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

