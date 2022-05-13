import React from 'react';
import TreeView from '../TreeView';
import { exploreItems } from './constants/exploreItems';
import { Container } from './styles';

const SideBar = () => (
  <Container>
    <h1>Leonardo Corbi</h1>
    {exploreItems.map((item) => (
      <TreeView data={item} key={item.title} />
    ))}
  </Container>
);

export default SideBar;
