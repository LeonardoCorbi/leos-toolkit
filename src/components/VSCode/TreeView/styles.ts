import styled, { css } from 'styled-components';
import { expandIcon } from '../SideBar/constants/icons';

interface IDetails {
  tabLength: number;
}

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  user-select: none;
  padding-left: 10px;

  width: 100%;
  height: fit-content;

  overflow: hidden;

  font-family: 'Roboto', sans-serif;
  font-size: 13.5px;

  details > hr {
    border-color: #65646C00;
  }

  &:hover {
    details > hr {
      border-color: #65646CFF;
    }
  }
`;

export const Summary = styled.summary`
  padding: 1px 15px;
  position: relative;
  display: flex;

  img {
    width: 16px;
    aspect-ratio: 1/1;
    margin: 0 4px;
  }
`;

export const Details = styled.details<IDetails>`
  padding-left: ${({ tabLength }) => tabLength * 8}px;
  position: relative;

  hr {
    border: 0.5px solid;

    transform: rotate(90deg);
    transform-origin: 0 0;
    
    width: 100vh;
    
    position: absolute;
    z-index: 0;
    left: 12px;
    margin-top: 3px;

    transition: border-color 200ms ease-in-out;
  }

  & > summary::marker {
    content: '';
    display: none;
  }

  & > summary::before {
    content: ${expandIcon};
    position: absolute;
    left: 0px;

    transform-origin: 50% 35%;

    transition: transform 100ms linear;
  }

  &[open] > summary::before {
    transform: rotate(90deg) translateY(-4px);
  }
`;

const selectionStyle = css`
  content: '';
  width: 300%;
  height: 17px;
  background-color: #FFEEEE22;
  top: 1px;
  left: -100px;
  position: absolute;
`;

export const Content = styled.ul`
  margin-top: 2px;
  padding-left: 20px;

  cursor: pointer;

  .selected {
    &::before {
      ${selectionStyle}
    }
  }
`;

export const File = styled.li`
  display: flex;

  padding: 1px 0;

  background-color: #120F1D;

  position: relative;
  z-index: 10;

  &:not(.selected):hover::before {
    ${selectionStyle}
  }

  img {
    width: 16px;
    aspect-ratio: 1/1;

    margin: 0 4px;
  }
`;
