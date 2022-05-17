import {
  FaCheckCircle, FaSave, FaShareAlt, FaTrash,
} from 'react-icons/fa';
import { RiBracesLine } from 'react-icons/ri';
import styled from 'styled-components';
import { defaultViewContentWidth } from '../../Styles/globalStyles';

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
  justify-content: center;
  align-items: center;

  padding: 24px;

  ${defaultViewContentWidth}
`;

export const PalletWrapper = styled.div<IShadesWrapper>`
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

margin-top: 16px;
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

export const ButtonsWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  gap: 16px;
`;

export const SavedPallets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 256px;
  width: fit-content;

  background-color: white;

  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;

  h2 {
    color: black;
  }
`;

export const Tools = styled.div`
  width: max-content;
  color: black;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  div {
    color: black;
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: opacity 300ms ease-in-out;

    cursor: pointer;
  }

  input {
    font-size: 24px;
    color: black;
    width: fit-content;
    background-color: red;
    padding: 0;
  }

  .in {
    opacity: 1;
  }

  .out {
    opacity: 0;
  }
`;

export const PalletName = styled.div`
  font-size: 24px;

  margin: 0 8px;
  padding: 4px;

  border-radius: 8px;

  background: transparent;
  transition: background 300ms ease-in-out;

  &:hover, &:focus {
    background: #ececec;
    width: fit-content;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 48px;
`;

export const Share = styled(FaShareAlt)`
  fill: black;
`;

export const Trash = styled(FaTrash)`
  fill: black;
`;

export const Save = styled(FaSave)`
  fill: black;
`;

export const Confirm = styled(FaCheckCircle)`
  fill: black;
`;

export const Braces = styled(RiBracesLine)`
  fill: black;
`;
