import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-bottom-left-radius: ${({ theme }) => theme.spacing(2.5)};
  border-bottom-right-radius: ${({ theme }) => theme.spacing(2.5)};
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const NavPage = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  /* text-transform: uppercase; */

  margin-bottom: 0;
  &.active {
    color: #ff1e00;
  }
`;
export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  /* text-transform: uppercase; */

  margin-bottom: 0;
`;
export const NavHead = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  /* text-transform: uppercase; */

  margin-bottom: 0;
`;
export const Navigations = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;
export const NavItem = styled.li`
  color: ${({ theme }) => theme.colors.dark};
`;
export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;
