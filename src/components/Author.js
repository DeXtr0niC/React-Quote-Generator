import React from 'react'
import styled from 'styled-components'

const StyledAuthor = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  padding-top: 20px;
  font-size: 1em;
  text-align: right;
`

const Author = ({ author }) => {
  return (
    <StyledAuthor>
      -
      <span id='author'>
        {' '}
        <cite>{author}</cite>
      </span>
    </StyledAuthor>
  )
}

export default Author
