import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import instagram from "../img/insta-icon.svg";
import logo from "../img/tad_logo.png";

const Nav = styled.nav`
  flex: 0 0 auto;
  padding: 2rem;
`;
const NavBrand = styled.div`
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
`;
const NavbarItem = styled(Link)`
  align-items: center;
  display: flex;
  img {
    display: block;
    height: auto;
    width: 5rem;
  }
`;

const Navbar = () => (
  <Nav>
    <NavBrand>
      <NavbarItem to="/">
        <img src={logo} alt="Thaddeus Jordan" />
      </NavbarItem>
    </NavBrand>
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="#">
      LinkedIn
    </Link>
    <Link className="navbar-item" to="#">
      Facebook
    </Link>
    <Link className="navbar-item" to="#">
      Instagram
    </Link>
    <Link className="navbar-item" to="#">
      SoundCloud
    </Link>
    <Link className="navbar-item" to="#">
      Discord
    </Link>
  </Nav>
);

export default Navbar;
