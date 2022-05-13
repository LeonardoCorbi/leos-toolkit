import styled from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  height: 35px;
  display: flex;
  background: #120F1D;

  position: absolute;

  box-shadow: 0px 0px 12px black;

  z-index: 1000;

  .selected {
    background: #1A1625;
    border-bottom: 1px solid #377EDA;
  }
`;

export const Tab = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  padding: 8px;

  font-family: 'Roboto', sans-serif;
  font-size: 13.5px;

  user-select: none;

  cursor: pointer;

  img {
    width: 16px;
    aspect-ratio: 1/1;
  }
`;
