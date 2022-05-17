import styled, { createGlobalStyle, css } from 'styled-components';
import { core, fontColors, miscColors } from './color.tokens';

interface IDefaultViewContentWidth {
  isMenuOpened: boolean;
}

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: JetBrains;
    src: url('/assets/fonts/JetBrainsMono-Regular.ttf');
  }
  
  *, h1, h2 {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${fontColors.white};
  }
  
  input {
    padding: 8px;

    color: ${fontColors.white};

    border: 1px solid ${core.primary500};
    border-radius: 4px;
  }

  * {
    font-weight: 400;

    &::selection {
      background-color: ${miscColors.textSelection};
      color: ${fontColors.white};
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

    background-color: ${core.tertiary500};

    * {
      font-family: 'Roboto', sans-serif;
      color: ${fontColors.white};
    }

    code, code > span, pre > span {
      font-family: JetBrains, Source Code Pro, monospace !important;
    }
  }
`;

export const MainWrapper = styled.main`
  max-width: 1640px;
  height: fit-content;

  margin: 0 auto;


  @media(max-width: 1640px){//! CUSTOM
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Pink = styled.code`
  color: ${core.quaternary500};
`;

export const Purple = styled.code`
  color: ${core.tertiary200};
`;

export const Orange = styled.code`
  color: ${core.quinary500};
`;

export const Green = styled.code`
  color: ${core.secondary500};
`;

export const Cyan = styled.code`
  color: ${core.primary500};
`;

export const defaultViewContentWidth = css<IDefaultViewContentWidth>`
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100vw' : 'calc(100vw - 200px)')};
`;

export const bioAnimation = css`
  @keyframes Typing{
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes Blinking{
    from {
      border-color: ${fontColors.white};
    }
    to {
      border-color: transparent;
    }
  }
`;
