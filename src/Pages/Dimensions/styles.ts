import styled from 'styled-components';

export const Container = styled.div`
`;

export const Controllers = styled.article`
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;

  input {
    width: 100px;

    color: black;
  }
`

export const Preview = styled.article`

width: 100%;

fieldset {
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: 2px solid white;
  border-radius: 16px;
  
    height: 300px;
    width: 100%;
    
    padding: 32px 16px;
    
    legend {
      margin-left: 32px;
      padding: 0 8px;
  
      font-weight: 700;
    }
  }
`

export const Shape = styled.div`
  border: 1px solid white;
`