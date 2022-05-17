import React from 'react';
import { useMenu } from '../../../hooks/useMenu';
import TreeView from '../TreeView';
import { exploreItems } from './constants/exploreItems';
import { Container, Close, ActionButtons } from './styles';

const SideBar = () => {
  const {
    isMenuOpened,
    toggleMenu,
    isMobile,
    toggleIsCodeView,
  } = useMenu();

  return (
    <Container isMenuOpened={isMenuOpened} isMobile={isMobile}>
      <span>
        <h1>Leonardo Corbi</h1>
        <Close onClick={toggleMenu} />
      </span>
      {exploreItems.map((item) => (
        <TreeView data={item} key={item.title} />
      ))}
      <ActionButtons>
        <button type="button" onClick={toggleIsCodeView}>View code</button>
      </ActionButtons>
    </Container>
  );
};

export default SideBar;
