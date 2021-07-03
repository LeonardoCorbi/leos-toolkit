import styled from 'styled-components';

export const FirstContainer = styled.article`
  padding: 0 96px;

  height: calc(100vh - 90px);

  background: var(--bgGray1);

  font-family: Source Code Pro;
  
  section {
    border: 1px solid white;
    
    span {
      background: var(--secondaryColor);
      padding: 4px;
      border-radius: 4px;

      font-family: Source Code Pro;
      font-weight: 600;
      color: var(--bgGray1);
    }
  }

  img {
    position: absolute;
    right: 96px;
    top: 50%;

    border-radius: 50%;

    transform: translateY(-50%);
  }
`;

export const SecondContainer = styled.article`
  padding: 0 96px;

  height: 100vh;

  background: var(--bgGray2);
`

export const ThirdContainer = styled.article`
  padding: 0 96px;

  height: 100vh;

  background: var(--bgGray1);
`

export const ForthContainer = styled.article`
  padding: 0 96px;

  height: 100vh;

  background: var(--bgGray2);
`