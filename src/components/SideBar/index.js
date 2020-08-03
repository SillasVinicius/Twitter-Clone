import React from 'react';
import StickyBox from 'react-sticky-box';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
  } from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

function SideBar() {
  return (
    <Container>
        <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
        </SearchWrapper>

        <StickyBox>
          <Body>
            <List
              title="Talves você curta"
              elements={[
                <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
                <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
                <FollowSuggestion name="Camila Magalhães" nickname="@camilaamgl" />,
              ]}
            />

            <List
              title="O que está acontecendo"
              elements={[
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
              ]}
            />
          </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;