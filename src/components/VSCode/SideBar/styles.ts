import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #120F1D;
  width: 200px;
  height: 100vh;

  z-index: -10;
  overflow: hidden;

  h1 {
    display: flex;
    align-items: center;
    
    height: 35px;

    padding-left: 10px;

    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    text-transform: uppercase;

    box-shadow: 0px 0px 12px black;

    position: relative;
  }
`;
