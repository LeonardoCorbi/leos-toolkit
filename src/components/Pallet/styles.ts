import styled from 'styled-components';

interface IBoxColor {
  color: string;
  index: number;
}

interface IShadesWrapper {
  background: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColorBox = styled.div<IBoxColor>`
  position: relative;
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100px;
  height: 100px;

  border-radius: ${({ index }) => index === 4 && '8px'};

  cursor: pointer;

  span {
    position: absolute;
    top: -32px;
    color: ${({ color }) => color};
  }

  p, ul {
    margin-bottom: -32px;
    color: ${({ color }) => color};
  }
`;
