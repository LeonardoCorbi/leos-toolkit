import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiCodeSSlashLine, RiLayout5Line } from 'react-icons/ri';
import { core } from '../../../Styles/color.tokens';

interface ISidebar {
  isMenuOpened: boolean;
  isMobile: boolean;
}

export const Container = styled.div<ISidebar>`
  display: flex;
  flex-direction: column;
  background-color: #120F1D;
  width: 200px;
  height: 100vh;

  position: relative;

  z-index: 100;
  overflow: hidden;

  transition: margin-left 300ms ease-in-out;

  margin-left: ${({ isMenuOpened }) => (isMenuOpened ? '-200px' : '0')};

  @media(max-width: 750px){
    position: absolute;
  }

  & > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    height: 35px;

    padding: 0 10px;
    margin-bottom: 10px;

    box-shadow: 0px 0px 12px black;
  }

  h1 {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const Close = styled(IoMdCloseCircle)`
  fill: white;

  @media(min-width: 750px){
    display: none;
  }
`;

export const ActionButtons = styled.article`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;

  background-color: ${core.tertiary400};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
`;

export const Code = styled(RiCodeSSlashLine)`
  font-size: 24px;
`;

export const Layout = styled(RiLayout5Line)`
  font-size: 24px;
`;
