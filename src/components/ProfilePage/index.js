import React from 'react';
import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton
 } from './styles';

import Feed from './../Feed';
 
function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Sillas Vinícius</h1>
        <h2>@SillasVinicius</h2>

        <p>
          Looking for a job as a front-end or back-end developer, hire me !!!
        </p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brazil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de março de 2001
          </li>
        </ul>

        <FollowAge>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> Seguidores
          </span>
        </FollowAge>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;