import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --main: #3EFD6F;
        --backgroundColor: #0F1519; 
    }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    color: #ffffff;
    background-color: var(--backgroundColor);
    font-family: 'Roboto', sans-serif;

    div#root {
      height: 100%;
      width: calc(100% - 32px);
    }

    a {
      text-decoration: none;
    }
  }
`;
