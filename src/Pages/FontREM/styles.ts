import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.article`
  font-size: 24px;

  width: 50%;

  margin: 0 auto;
  
  input {
    width: 50px;
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
      background-color: #0000FF33;
    }

    span:nth-child(3) {
      background-color: #FFBB0033;
    }

    span:nth-child(4) {
      background-color: #00FFFF33;
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
      background-color: #0000FF33;
    }

    span:nth-child(3) {
      background-color: #FFBB0033;
    }

    span:nth-child(4) {
      background-color: #00FFFF33;
    }
  }

`