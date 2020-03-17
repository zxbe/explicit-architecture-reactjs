import React from 'react';
import { Branding, BrandingLink, Container, Header, NavBar } from './index.styled';

const HeaderComponent = () => (
  <Header>
    <NavBar>
      <Container>
        <Branding>
          <BrandingLink to={ `/` }>Gist Explorer</BrandingLink>
        </Branding>
      </Container>
    </NavBar>
  </Header>
)


export default HeaderComponent;
