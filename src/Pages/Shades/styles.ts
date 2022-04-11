import styled from 'styled-components';

interface IBoxColor {
  color: string;
  index: number;
}

interface IShadesWrapper {
  background: string;
}

export const Container = styled.div`
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  height: 100vh;
`;

export const ShadesWrapper = styled.div<IShadesWrapper>`
  display: flex;
  flex-direction: row-reverse;

  background-color: ${({ background }) => background};

  height: fit-content;
  padding: 40px;
  padding-bottom: 14px;
  border-radius: 8px;
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

export const ColorPickerWrapper = styled.div`
  color: black;

  article {
    position: relative;

    border-radius: 4px;
    padding: 8px;

    background-color: white;

    color: black;

    p {
      color: black;
    }
  }

  label {
    font-size: 14px !important;
  }

  input {
    color: black;
    font-size: 16px !important;
    border-radius: 0;
    width: 100% !important;
    height: 30px;
  }

  .colorPicker {
    margin-top: -8px;
  }
`;
