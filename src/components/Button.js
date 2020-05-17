import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  height:38px;
  border:none;
  border-radius:3px;
  color:#fff;
  background-color:#333;
  outline:none;
  font-size:0.85em;
  padding: 8px 18px 6px 18px;
  margin-top: 30px;
  opacity:1;
  cursor:pointer;
  &:hover {
    opacity:0.9;
  }
`

export const UtilityButton = styled(Button)`
  float:right;
`

export const SocialButton = styled(Button)`
  float:left;
  padding: 8px 0 0;
  font-size:1.2em;
  margin-right:5px;
  height:30px;
  width:40px;
  position: relative;
  text-align: center;
  a {
  color: #fff;
  text-decoration: none;
  }
`
export const TwitterButton = ({ currentQuote, currentAuthor }) => {
  const uri = 'http://google.com'// 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.currentQuote[0] + '" ' + props.currentQuote[1])

  return (
    <SocialButton as='div' style={{ color: '#fff', textDecoration: 'none' }} href={uri}>
      <a target='_blank' rel='noopener noreferrer' href={uri}>
        <i className='fab fa-twitter' />
      </a>
    </SocialButton>
  )
}

export const NewQuoteButton = ({ clickHandler }) => {
  return (
    <UtilityButton title='Get a new quote!' onClick={clickHandler}>
      New Quote
    </UtilityButton>
  )
}

export default Button

// function TwitterButton(props) {
// let uri = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.currentQuote[0] + '" ' + props.currentQuote[1])
// return (
//   <IconButton id={'twitter-button'} title={'Tweet this quote!'}>
//     <a id={'tweet-quote'} target={'_blank'}  rel="noopener noreferrer" href={uri}> <i className="fab fa-twitter"></i></a>
//   </IconButton>
// )
// }

// function NewQuoteButton (props) {
// return
// <button id={'new-quote'} title='Get a new quote!' onClick={props.clickHandler} className={'button'}>New Quote</button>
// }
