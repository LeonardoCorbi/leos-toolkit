import styled from 'styled-components';
import { core } from '../../Styles/color.tokens';

export const Container = styled.div`

  h1 {
    color: ${core.secondary500};
  }
`;

export const Content = styled.article`
  font-size: 24px;

  width: 50%;

  margin: 0 auto;
  margin-top: 32px;
  
  input {
    width: 80px;

    padding: 8px;

    font-size: 24px;

    border: 1px solid ${core.primary500};
    border-radius: 4px;
  }

  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 25%;

    padding: 4px 8px;

    border-left: 1px solid white;

    div {
      display: flex;

      align-items: center;
      font-size: 20px;
    }
  }

  .line {
    display: flex;
    border-bottom: 1px solid white;

    span:first-child {
      border-left: none;

      flex-direction: row;

      width: 30%;
    }

    span:nth-child(2) {
      background-color: ${core.primary500};
    }

    span:nth-child(3) {
      background-color: ${core.quinary500};
    }

    span:nth-child(4) {
      background-color: ${core.secondary500};
    }
    
  }

  header {
    display: flex;

    border-bottom: 1px solid white;
    
    span:first-child {
      width: 30%;
      
      border-left: none;
    }

    span:nth-child(2) {
      /* background-color: ${core.primary500}; */
    }

    span:nth-child(3) {
      /* background-color: ${core.quinary500}; */
    }

    span:nth-child(4) {
      /* background-color: ${core.secondary500}; */
    }
  }

`;
