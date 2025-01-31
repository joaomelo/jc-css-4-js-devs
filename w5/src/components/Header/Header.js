import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeaderResponsive />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag"/>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search"/>
          </UnstyledButton>
          <UnstyledButton onClick={()=>setShowMobileMenu(true)}>
            <Icon id="menu"/>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const SuperHeaderResponsive = styled(SuperHeader)`
  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media (${QUERIES.tabletAndSmaller}) {
    display: flex;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--colors-gray-300);
  border-top: 4px solid var(--colors-gray-900);
  overflow: auto;

  @media (${QUERIES.tabletAndSmaller}) {
    justify-content: space-between;
    align-items: center;
  }

  @media (${QUERIES.phoneAndSmaller}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.1vw - 4rem, 3.5rem);
  margin: 0px 48px;

  @media(${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media(${QUERIES.tabletAndSmaller}) {
    flex: revert;
  }  
`;

const Filler = styled.div`
  flex: 1;
  @media(${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--colors-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
