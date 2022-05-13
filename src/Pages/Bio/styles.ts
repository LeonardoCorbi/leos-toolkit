import styled from 'styled-components';

export const FirstContainer = styled.article`
  padding: 0 176px;

  height: calc(100vh - 90px);

  font-family: Source Code Pro;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1216px){//! CUSTOM
    padding: 0;

    flex-direction: column-reverse;
    justify-content: center;
  }

  @media(max-width: 1024px){//! TABLET
    padding-bottom: 40px;
  }

  figure {
    position: relative;

    display: flex;
    justify-content: flex-end;

    @media(min-width: 1216px) and (max-width: 1550px){//! CUSTOM
      margin-left: 60px;
    }

    @media(max-width: 1216px){//! CUSTOM
      width: 300px;
    }

    @media(max-width: 1216px){//! CUSTOM
      margin-bottom: 64px;
    }

    @media(max-width: 600px){//! CUSTOM
      width: 50%;
    }

    img {
      border-radius: 50%;

      width: 100%;
    }

    figcaption {
      position: absolute;
      bottom: 24px;
      left: -24px;

      font-family: JetBrains;
      white-space: nowrap;

      width: fit-content;
      padding: 8px;

      background-color: var(--cyan);

      border-radius: 4px;

      box-shadow: -5px 12px 20px black;

      @media(max-width: 500px){//! CUSTOM
        font-size: 0.8em;

        bottom: 0;

        transform: translateX(-50%);
        left: 50%;
      }
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

    @media(min-width: 1216px) and (max-width: 1550px){//! CUSTOM
      font-size: 
        calc(32px - ((8 * (1550px - 100vw) / 334)));
    }

    @media(max-width: 800px){//! CUSTOM
      font-size:
        calc(32px - ((20 * (800px - 100vw) / 480)));
    }

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
    animation:
      Typing 1500ms 1800ms steps(30) forwards, Blinking 600ms 1800ms 2 linear;
  }

  .line3 {
    animation:
      Typing 1500ms 3300ms steps(30) forwards, Blinking 600ms 3300ms 2 linear;
  }

  .line4 {
    animation:
      Typing 1500ms 4800ms steps(30) forwards, Blinking 600ms 4800ms 2 linear;
  }

  .line5 {
    animation:
      Typing 1500ms 6300ms steps(30) forwards, Blinking 600ms 6300ms 2 linear;
  }

  .line6 {
    animation:
      Typing 1500ms 7800ms steps(30) forwards,
      Blinking 750ms 7800ms linear infinite;
  }
`;

export const SecondContainer = styled.article`
  padding: 0 256px;

  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 1550px){//! CUSTOM
    justify-content: center;
  }

  @media(max-width: 1216px){//! CUSTOM
    flex-direction: column-reverse;
    align-items: center;

    height: fit-content !important;

    padding: 0;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  ul {

    @media(max-width: 555px){//! CUSTOM
      padding: 0 24px;
    }

    li {
      display: flex;
      flex-direction: column;

      font-family: JetBrains;

      width: 500px;
      min-height: 150px;

      border-radius: 4px;

      margin-bottom: 8px;

      padding: 32px;

      box-shadow: 0 0 0 0 black;

      cursor: pointer;
      
      transition: all 200ms ease-in-out;

      @media(max-width: 555px){//! CUSTOM
        width: 100%;
      }

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
`;

export const Biography = styled.section`
  font-family: JetBrains;

  display: flex;
  flex-direction: column;

  min-width: 500px;
  max-width: 500px;

  @media(min-width: 1216px) and (max-width: 1550px){//! CUSTOM
    margin-left: 32px;
  }

  @media(max-width: 1216px){//! CUSTOM
    max-width: 700px;
    width: 100%;

    margin-bottom: 32px;
  }

  @media(max-width: 1024px){//! TABLET
    padding: 0 32px;
  }

  @media(max-width: 555px){//! CUSTOM
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

export const ThirdContainer = styled.article`
  padding: 80px 96px;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: JetBrains;

  @media(max-width: 1024px){//! TABLET
    padding: 80px 96px;

    height: fit-content;
  }

  @media(max-width: 960px){//! CUSTOM
    padding: 32px 24px;
  }

  .main {
    font-size: 32px;

    text-align: center;

    @media(max-width: 960px){//! CUSTOM
      font-size: 1.5em;
    }
  }

  span + span {
    padding-top: 100px;

    @media(max-width: 1024px){//! TABLET
      padding-top: 50px;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      min-width: 100%;
      
      flex-wrap: wrap;

      li {
        background: var(--bgGray2);
        width: 300px;
        height: 300px;

        border-radius: 4px;

        margin: 16px;

        padding: 32px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          font-size: 32px;
        }

        @media(max-width: 1000px){//! CUSTOM
          width: calc(300px - (150 * (1000px - 100vw) / 575));
          height: calc(300px - (150 * (1000px - 100vw) / 575));
        }

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
`;

export const ForthContainer = styled.article`
  padding: 0 96px;

  height: 100vh;
`;
