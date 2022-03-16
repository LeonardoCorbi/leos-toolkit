import styled from 'styled-components';

interface IBoxColor {
  color: string;
  index: number;
}

export const Container = styled.div`
  font-family: sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  height: 100vh;
`;

export const ShadesWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 32px;

  margin-bottom: 48px;
`;

export const ColorBox = styled.div<IBoxColor>`
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100px;
  height: 100px;

  border: ${({ index }) => index === 4 && '3px solid white'};
  border-radius: 8px;

  cursor: pointer;

  p {
    margin-bottom: -32px;
  }
`;

export const ColorPickerWrapper = styled.div`
  color: black;

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
`;