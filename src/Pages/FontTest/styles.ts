import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: white;
  width: 100%;
  min-height: 100%;

  color: black;

  padding: 0 96px;
  padding-top: 24px;

  

  h1 {
    margin-bottom: 8px;
  }

  textarea {
    width: 100%;
    resize: none;

    transition: all 200ms ease-in-out;
  }

  textarea:hover {
    resize: vertical;
    background: #babaca22;
  }

  select {
    background: gray;
  }
`;

export const Controls = styled.div`
  margin-bottom: 32px;

  display: flex;
  justify-content: space-between;

`

const commonCss = css`
  display: flex;
  flex-direction: column;

  padding: 8px;

  background: var(--bgGray1);

  border: 1px solid var(--bgGray2);
  border-radius: 4px;

  box-shadow: 0 0 20px 0 #0009;

  width: 280px;
  height: 100%;

  input[type="text"], input[type="number"] {
    border: 1px solid var(--cyan);
    border-radius: 4px;

    padding: 8px;
    background: var(--bgGray1);
    color: var(--white);

    width: 100%;

    font-family: JetBrains;
  }

  h2 {
    font-family: JetBrains;

    margin-bottom: 16px;
  }

  span {
    color: var(--white);
    margin-bottom: 8px;

    font-family: JetBrains;
  }
`

export const PageSettings = styled.span`
  ${commonCss}
  
  .fntInput {
    height: 100px;
    border: 1px solid var(--cyan);
    border-radius: 4px;

    padding: 8px;
    background: var(--bgGray1);
    color: var(--white);

    width: 100%;

    font-family: JetBrains;

    &:hover {
      resize: none;
    }
  }

`

export const TitleSettings = styled.span`${commonCss}`

export const ContentSettings = styled.span`${commonCss}`

