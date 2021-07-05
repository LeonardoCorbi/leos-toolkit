import styled from 'styled-components';

export const Container = styled.div`

  h1 {
    color: var(--green);
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

    color: var(--white);
    font-size: 24px;
    font-family: JetBrains;

    border: 1px solid var(--cyan);
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
      background-color: var(--cyan);
    }

    span:nth-child(3) {
      background-color: var(--orange);
    }

    span:nth-child(4) {
      background-color: var(--green);
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
      /* background-color: var(--cyan); */
    }

    span:nth-child(3) {
      /* background-color: var(--orange); */
    }

    span:nth-child(4) {
      /* background-color: var(--green); */
    }
  }

`