import React from 'react';
import TreeView from '../TreeView';
import { exploreItems } from './constants/exploreItems';
import { Container } from './styles';

const SideBar = () => (
  <Container>
    <h1>Leonardo Corbi</h1>
    <TreeView data={exploreItems} />
  </Container>
);

export default SideBar;
