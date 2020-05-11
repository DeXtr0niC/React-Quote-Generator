import React from 'react'
import styled from 'styled-components'

const StyledButtonBar = styled.div`
  width: 100%;
  margin: 8px auto auto;
  //height: 30%;
  max-width: 1800px;
  padding: 2px;
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
