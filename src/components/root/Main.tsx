import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../common/useAuth';
import { About } from '../pages/About';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';

const Navbar = styled.nav`
  background-color: hsl(210deg, 15%, 6%);
  border-bottom: 1px solid hsl(210deg, 15%, 20%);
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;
const NavItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: start;
  padding-left: 0;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: hsl(210deg, 9%, 45%);
  &[class*="active"] {
    color: hsl(210deg, 10%, 90%);
  }
`;
const Wrapper = styled.main`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Main = () =>  {
  const { user } = useAuth();
  const currentLocation = useLocation();
  return (
    <>
      <Navbar>
        <NavItems>
          <NavItem>
            <StyledNavLink to="/home" end={true}>
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/about">About</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
          </NavItem>
          <NavItem>
            {user ? (
              <StyledNavLink to="/logout">Logout</StyledNavLink>
            ) : (
              <StyledNavLink to="/login" state={currentLocation.pathname}>
                Login
              </StyledNavLink>
            )}
          </NavItem>
        </NavItems>
      </Navbar>
      <Wrapper>
        <Routes>
          <Route path="/home" caseSensitive={false} element={<Home />}></Route>
          <Route path="/about" caseSensitive={false} element={<About />}></Route>
          <Route path="/dashboard" caseSensitive={false} element={<Dashboard />}></Route>
          <Route index element={<Home />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export { Main };
