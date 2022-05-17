import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { tabsColors } from '../../../Styles/color.tokens';

interface ITabsWrapper {
  isMenuOpened: boolean;
}

export const Container = styled.ul<ITabsWrapper>`
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100vw' : 'calc(100vw - 200px)')};
  height: 35px;
  display: flex;
  background: ${tabsColors.background.primary};

  position: absolute;

  box-shadow: 0px 0px 12px black;

  overflow: hidden;

  z-index: 90;

  transition: width 300ms ease-in-out, margin-left 300ms ease-in-out;

  @media(max-width: 750px){
    margin-left: ${({ isMenuOpened }) => (isMenuOpened ? '0' : '200px')};

    padding-left: ${({ isMenuOpened }) => (isMenuOpened ? '32px' : '0')};
  }

  &:hover {
    overflow: auto;
  }

  .selected {
    background: ${tabsColors.background.primarySelected};
    border-bottom: 1px solid ${tabsColors.border};
  }
`;

export const HamburgerMenu = styled(FiMenu)`
  fill: white;
  z-index: 100;
  position: absolute;
  width: 24px;
  height: 24px;
  margin-left: 8px;
  margin-top: 5px;
  left: 0;

  @media(min-width: 750px){
    display: none;
  }
`;

export const Tab = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: max-content;

  padding: 8px;

  font-size: 13.5px;

  user-select: none;

  cursor: pointer;

  img {
    width: 16px;
    aspect-ratio: 1/1;
  }

  p {
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
  }
`;
