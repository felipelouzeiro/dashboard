import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');

    background-color: #f6f6f6;
    font-family: 'Montserrat', sans-serif;
  }
`
