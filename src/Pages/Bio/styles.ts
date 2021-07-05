import styled from 'styled-components';

export const FirstContainer = styled.article`
  padding: 0 176px;

  height: calc(100vh - 90px);

  background: var(--bgGray1);

  font-family: Source Code Pro;

  display: flex;
  align-items: center;
  justify-content: space-between;

  figure {
    position: relative;

    img {
      border-radius: 50%;
    }

    figcaption {
      position: absolute;
      bottom: 24px;
      left: -24px;

      font-family: JetBrains;
      color: var(--bgGray1);
      font-weight: 600;

      width: fit-content;
      padding: 8px;

      background-color: var(--cyan);

      border-radius: 4px;

      box-shadow: -5px 12px 20px black;
    }
  }

`;

export const Animation = styled.section`
  display: flex;
  flex-direction: column;

  div {
    font-family: JetBrains;
    color: var(--white);
    font-size: 32px;
    
    width: 0;
    border-right: 3px solid transparent;
    white-space: nowrap;

    overflow: hidden;
    
    span {
      font-family: inherit;
    }
  }


  .pink {
    color: var(--pink);
  }

  .purple {
    color: var(--purple);
  }

  .cyan {
    color: var(--cyan);
  }

  .green {
    color: var(--green); 
  }

  .orange {
    color: var(--orange);
  }

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
      border-color: var(--white);
    }
    to {
      border-color: transparent;
    }
  }

  .line1 {
    animation: Typing 1800ms steps(30) forwards, Blinking 600ms 3;
  }

  .line2 {
    animation: Typing 1500ms 1800ms steps(30) forwards, Blinking 600ms 1800ms 2 linear;
  }

  .line3 {
    animation: Typing 1500ms 3300ms steps(30) forwards, Blinking 600ms 3300ms 2 linear;
  }

  .line4 {
    animation: Typing 1500ms 4800ms steps(30) forwards, Blinking 600ms 4800ms 2 linear;
  }

  .line5 {
    animation: Typing 1500ms 6300ms steps(30) forwards, Blinking 600ms 6300ms 2 linear;
  }

  .line6 {
    animation: Typing 1500ms 7800ms steps(30) forwards, Blinking 750ms 7800ms linear infinite;
  }
`

export const SecondContainer = styled.article`
  padding: 0 256px;

  height: 100vh;

  background: var(--bgGray2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {

    


    li {
      display: flex;
      flex-direction: column;

      font-family: JetBrains;

      width: 500px;
      min-height: 150px;

      background: var(--bgGray1);

      border-radius: 4px;

      margin-bottom: 8px;

      padding: 32px;

      box-shadow: 0 0 0 0 black;

      cursor: pointer;
      
      transition: all 200ms ease-in-out;

      h3 {
        font-family: inherit;
        font-size: 20px;
        color: var(--cyan);
        font-weight: 700;

        margin-bottom: 8px;
      }

      span {
        font-family: inherit;
        font-weight: 500;
        font-size: 16px;
        color: var(--white);

        & + span {
          color: var(--lightGray);
          margin-top: 4px;
        }
      }

      &:hover {
        transform: scale(1.05);

        box-shadow: 0 0 30px 10px black;
      }
    }
  }
`

export const Biography = styled.section`
  font-family: JetBrains;

  display: flex;
  flex-direction: column;

  width: 500px;

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
`

export const ThirdContainer = styled.article`
  padding: 0 96px;

  height: 100vh;

  background: var(--bgGray1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: JetBrains;

  .main {
    font-size: 32px;
  }

  span + span {

    padding-top: 100px;
    ul {
      display: flex;
      flex-direction: row;

      min-width: 100%;


      li {
        background: var(--bgGray2);
        width: 300px;
        height: 300px;

        border-radius: 4px;

        margin: 0 16px;

        padding: 32px;

        display: flex;
        flex-direction: column;

        &:hover {
          animation: Floating 1000ms ease-in-out alternate-reverse infinite;

        }
      }
    }
  }

  @keyframes Floating{
    from {
      transform: scale(1.05);
      box-shadow: 0 0 40px black;
    }
    to {
      transform: scale(1);
      box-shadow: 0 0 0 0 black;
    }
  }
`

export const ForthContainer = styled.article`
  padding: 0 96px;

  height: 100vh;

  background: var(--bgGray2);
`