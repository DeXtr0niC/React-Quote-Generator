import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500);

* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: baseline;
}

body {
  font-family: 'Railway', sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #BDBB99;
  color: #333;
  }
`

export default GlobalStyle