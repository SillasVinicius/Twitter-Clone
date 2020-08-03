import React from 'react';

import { Container, Wrapper } from './styles';

import Main from './../Main';
import MenuBar from './../MenuBar';
import SideBar from './../SideBar';

function layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default layout;