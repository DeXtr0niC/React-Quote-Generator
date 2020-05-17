import React from 'react'
import styled from 'styled-components'
import { TwitterButton, NewQuoteButton } from '../Button'

const StyledButtonBar = styled.div`
  width: 100%;
  margin: auto;
  //height: 30%;
  max-width: 1800px;
  padding: 0px;
  flex: 1 1 30%;
  display: block;
`

const Buttonbar = (props) => {
  return (
    <StyledButtonBar>
      <TwitterButton as='div' />
      <NewQuoteButton />
      {/* <div>{props.children}</div> */}
    </StyledButtonBar>
  )
}

export default Buttonbar

// let ButtonBar = (props) => <div id={'buttonbar'}>{props.children}</div>
