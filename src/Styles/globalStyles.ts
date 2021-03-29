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

    font-family: Montserrat, sans-serif;
    color: white;
    font-weight: 700;
  }
  
  * {
    font-weight: 400;

    &::selection {
      background-color: #00FF0044;
      color: white;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
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
`

export const MainWrapper = styled.main`
  max-width: 1640px;
  height: 100%;

  margin: 0 auto;
  padding-top: 50px;
`