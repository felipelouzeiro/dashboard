import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    src: url('../fonts/Montserrat-Bold.ttf') format('truetype'),
         url('../fonts/Montserrat-SemiBold.ttf') format('truetype'),
         url('../fonts/Montserrat-Medium.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f6f6f6;
    font-family: 'Montserrat', 'sans-serif';
  }
`
