import styled from 'styled-components';
import { core } from '../../Styles/color.tokens';

interface IView {
  isMenuOpened: boolean;
}

export const Container = styled.main`
  display: flex;
`;

export const SideBarWrapper = styled.span``;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const View = styled.article<IView>`
  width: 100vw;
  height: 100vh;
  background: ${core.tertiary500};

  overflow: auto;

  
  padding-top: 48px;

  @media(max-width: 750px){
    ${({ isMenuOpened }) => !isMenuOpened && `
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #000000aa;
        z-index: 95;
      }
    `}
  }

  pre {
    & > code {
      font-family: JetBrains !important;
    }
  }

`;
