import { IoVideocamOutline } from 'react-icons/io5';
import {
  NavBar,
  HeaderWrapper,
  NavLogo,
  NavPage,
  NavHead,
  Navigations,
  NavItem,
  LogoBox,
} from './Header.styled';
import { Container } from 'components';
import { useTheme } from '@emotion/react';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <LogoBox>
              <NavLogo to="/">
                <IoVideocamOutline size="40px" color={theme.colors.accent} />
              </NavLogo>
              <NavLogo to="/">
                <NavHead>Movies - HomeWork 5</NavHead>
              </NavLogo>
            </LogoBox>
            <Navigations>
              <NavItem>
                <NavPage to="/">Home</NavPage>
              </NavItem>
              <NavItem>
                <NavPage to="/movies">Movies</NavPage>
              </NavItem>
            </Navigations>
          </HeaderWrapper>
        </Container>
      </NavBar>
    </>
  );
};
