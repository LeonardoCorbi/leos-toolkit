import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  //! Thin 100
  //! Light 300
  //! Regular 400
  //! Medium 500
  //! Bold 700

  @font-face {
    font-family: JetBrains;
    src: url('./assets/fonts/JetBrainsMono-Regular.ttf');
  }
  
  *, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: white;
  }
  
  input {
    padding: 8px;

    color: var(--white);

    border: 1px solid var(--cyan);
    border-radius: 4px;
  }

  * {
    font-weight: 400;

    &::selection {
      background-color: #00FFFFAA;
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
  }

  ul {
    padding: 0;
    list-style: none;
  }
  
  *, button, input {
    border: 0;
    background: none;
    outline: 0;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;

    background-color: #1A1625;
  }

  :root {
    --white: #E1E1E6;
    --lightGray: #B1B1B6;
    --bgGray1: #1c1c1c;
    --bgGray2: #0c0c0c;

    --pink: #FF79C6;
    --purple: #988BC7;
    --cyan: #75CEFA;
    --green: #3DD780;
    --orange: #DA9E64;
  }
`;

export const MainWrapper = styled.main`
  max-width: 1640px;
  height: fit-content;

  margin: 0 auto;

  font-family: JetBrains;

  @media(max-width: 1640px){//! CUSTOM
    padding-left: 32px;
    padding-right: 32px;
  }
`;
