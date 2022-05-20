import styled from 'styled-components';
import { defaultViewContentWidth, bioAnimation } from '../../Styles/globalStyles';

interface IFirstContainer {
  isMenuOpened: boolean;
}

export const FirstContainer = styled.article<IFirstContainer>`
  width: 100vw;
  height: 100%;
  padding: 0 16px;

  display: flex;
  flex-wrap: wrap;

  transition: width 300ms ease-in-out;

  @media(min-width: 750px){
    ${defaultViewContentWidth};
  }
`;

export const Animation = styled.code`
  display: flex;
  flex-direction: column;

  code {
    font-size: 24px;
    
    width: 0;
    border-right: 3px solid transparent;
    white-space: nowrap;

    overflow: hidden;

    @media(max-width: 500px){
      font-size: 16px;
    }
  }

  ${bioAnimation}

  .line1 {
    animation: 
      Typing 1800ms steps(30) forwards,
      Blinking 600ms 3;
  }

  .line2 {
    animation:
      Typing 1500ms 1800ms steps(30) forwards,
      Blinking 600ms 1800ms 2 linear;
  }

  .line3 {
    animation:
      Typing 1500ms 3300ms steps(30) forwards,
      Blinking 600ms 3300ms 2 linear;
  }

  .line4 {
    animation:
      Typing 1500ms 4800ms steps(30) forwards,
      Blinking 600ms 4800ms 2 linear;
  }

  .line5 {
    animation:
      Typing 1500ms 6300ms steps(30) forwards,
      Blinking 600ms 6300ms 2 linear;
  }

  .line6 {
    animation:
      Typing 1500ms 7800ms steps(30) forwards,
      Blinking 750ms 7800ms linear;
  }
`;

export const SecondContainer = styled.article<IFirstContainer>`
  height: 100vh;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100vw' : 'calc(100vw - 200px)')};

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  transition: width 300ms ease-in-out;
`;

export const Biography = styled.section`
  display: flex;
  flex-direction: column;

  min-width: 500px;
  max-width: 500px;

  @media(min-width: 1216px) and (max-width: 1550px){
    margin-left: 32px;
  }

  @media(max-width: 1216px){
    max-width: 700px;
    width: 100%;

    margin-bottom: 32px;
  }

  @media(max-width: 1024px){
    padding: 0 32px;
  }

  @media(max-width: 555px){
    padding: 0 24px;

    min-width: initial;
    max-width: initial;
    width: 100%;
  }

  span {

    &:nth-child(1) {
      font-size: 40px;
    }

    & + span {
      margin-top: 32px;

      em {
        color: inherit;
      }
    }
  }
`;
