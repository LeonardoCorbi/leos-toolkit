import styled, { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`

  //! Thin 100
  //! Light 300
  //! Regular 400
  //! Medium 500
  //! Bold 700
  
  *, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: white;
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
    font-family: Montserrat;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  body {
    overflow-x: hidden;

    background-color: #1c1c1c;
  }

  input {
    background-color: gray;

    height: 32px;
    border-radius: 8px;

    padding: 0 8px;
    font-weight: 500;
    font-size: 16px;

    
    &::placeholder {
      font-weight: 300;

      color: #00000088;
    }
  }

  :root {
    --bgGray1: #1c1c1c;
    --bgGray2: #0c0c0c;
    --secondaryColor: #24BBD8;
  }
`

export const MainWrapper = styled.main`
  max-width: 1640px;
  height: 100%;

  margin: 0 auto;

  @media(max-width: 1640px){//! CUSTOM
    padding-left: 32px;
    padding-right: 32px;
  }
`