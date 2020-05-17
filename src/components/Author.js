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
    <StyledAuthor>-
      <span id='author'> {author}</span>
    </StyledAuthor>
  )
}

export default Author

//
// let Author = (props) => (
//   <FadingComponent>
//     <div className={'quote-author'}>
//       - <span id={'author'}>{props.children}</span>
//     </div>
//   </FadingComponent>
// )
