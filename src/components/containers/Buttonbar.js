import React from 'react'
import styled from 'styled-components'

const StyledButtonBar = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1800px;
  padding: 0px;
  flex: 1 1 30%;
  display: block;
`

const Buttonbar = (props) => {
  return (
    <StyledButtonBar>
      <div>{props.children}</div>
    </StyledButtonBar>
  )
}

export default Buttonbar

// let ButtonBar = (props) => <div id={'buttonbar'}>{props.children}</div>
