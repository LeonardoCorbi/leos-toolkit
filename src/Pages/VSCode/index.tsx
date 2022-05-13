import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/VSCode/SideBar';
import TabsWrapper from '../../components/VSCode/TabsWrapper';
import { MenuProvider } from '../../context/MenuContext';
import Routes from '../../Routes';
import {
  Container,
  SideBarWrapper,
  Content,
  View,
} from './style';

const VSCode = () => (
  <MenuProvider>
    <Container>
      <SideBarWrapper>
        <SideBar />
      </SideBarWrapper>
      <Content>
        <TabsWrapper />
        <View>
          <Routes />
          <Outlet />
        </View>
      </Content>
    </Container>
  </MenuProvider>
);

export default VSCode;
