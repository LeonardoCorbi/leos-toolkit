import styled from 'styled-components';

interface Props {
  heightShow: number
  widthShow: number
}

export const Container = styled.div`
`;

export const Controllers = styled.article`
  margin-top: 32px;
  font-size: 24px;
  font-weight: 500;

  input {
    width: 120px;
    padding: 8px;

    color: var(--white);

    border: 1px solid var(--cyan);
    border-radius: 4px;

  }

  button {
    background: white;

    color: black;

    height: 32px;
    
    padding: 0 8px;

    border-radius: 8px;
    border: 2px solid;

    cursor: pointer;

    &:active {
      background: gray;
    }

    &:hover {
      background: lightgray;
    }
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

export const Shape = styled.div<Props>`
  border: 1px solid white;

  position: relative;

  &::after {
    content: '${props => props.heightShow}px';
    
    position: absolute;
    top: 50%;
    left: -15px;

    transform: translate(-50%, -50%) rotate(-90deg);
  }

  &::before {
    content: '${props => props.widthShow}px';
    
    position: absolute;
    top: -15px;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`