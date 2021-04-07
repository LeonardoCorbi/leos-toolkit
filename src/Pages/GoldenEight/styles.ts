import styled from 'styled-components';

export const Container = styled.div`

  button {
    padding: 4px 8px;

    background: gray;

    border-radius: 8px;

    cursor: pointer;
    margin-right: 4px;
  }
`;

export const Preview = styled.article`
  height: 200vh;

  margin-top: 32px;

  display: flex;
  justify-content: center;

  .selected {
    
  }

  div {
    margin: 8px 0;

    font-size: 20px;
    text-align: center;
    font-weight: 500;

    cursor: pointer;
  }
`

export const Bottom = styled.div`
  width: 100%;
  height: 5px;

  background: red;
`