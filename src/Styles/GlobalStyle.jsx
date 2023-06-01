import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    li {
    list-style: none;
    }

    a {
    text-decoration: none;
    }

    button {
    cursor: pointer;
    font:inherit;
    }
    body {
    background-color: #eee;
    }
`

export default GlobalStyle;

