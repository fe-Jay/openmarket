import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    :root {
    --color-primary: #21BF48;
    --color-dark: #767676;
    --color-light: #C4C4C4;
    --color-white: #fff;
    --color-black: #000;

    --font-size-micro: 0.75rem;
    --font-size-xxs: 1rem;
    --font-size-xs: 1.125rem;
    --font-size-s: 1.375rem;
    --font-size-m: 1.5rem;
    --font-size-l: 1.875rem;
    --font-size-xl: 2.25rem;
    }

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

    h1 {
        margin: 0;
    }

    img {
        display: inline-block;
        vertical-align: top;
        max-width: 100%;
    }

    button {
    cursor: pointer;
    font:inherit;
    }
    `;

export default GlobalStyle;
