import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { slide as SideMenu } from "react-burger-menu";

import instagram from "../img/insta-icon.svg";
import logo from "../img/tad_logo.svg";
import close from "../img/close.svg";

const NavWrapper = styled.nav`
  flex: 0 0 auto;
  padding: 0rem;
  max-height: 10vh;
  text-align: center;
  ${breakpoint("lg")`
  padding: 2rem;
  flex: 1 1 auto;
  max-height: 100vh;
`};

  div div .bm-burger-button {
    position: fixed;
    width: 40px;
    height: 40px;
    right: 25px;
    top: 25px;
    z-index: 900;
    display: block;
    ${breakpoint("lg")`
    display: none;
  `};
  }
`;
const Nav = styled.div`
  display: none;
  ${breakpoint("lg")`
  display: block;
`};
`;
const NavBrand = styled(Link)`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
  img {
    display: block;
    height: auto;
    width: 5rem;
    margin: 0;
  }
`;
const NavbarItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
`;

const BurgerMenuWrapper = styled.i`
  display: block;
  ${breakpoint("lg")`
display: none;
`};
`;

const Menu = styled(SideMenu)`
  display: block;
  ${breakpoint("lg")`
display: none;
`};
  padding: 4rem 0;
  ul {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    padding: 0.8rem 0rem;
  }
`;

var styles = {
  bmBurgerButton: {
    zIndex: "900"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "50px",
    width: "50px",
    right: "25px",
    top: "25px"
  },
  bmCross: {
    background: "transparent"
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#ffffff"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "#ffffff"
  }
};

const Navbar = () => (
  <NavWrapper>
    <Menu
      isOpen={false}
      width={"100%"}
      styles={styles}
      disableOverlayClick
      right
      customCrossIcon={<img src={close} />}
    >
      <ul>
        <li>
          <Link to="/" exact>
            <img src={logo} alt="Thaddeus Jordan" />
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="#">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="#">
            Facebook
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="#">
            Instagram
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="#">
            SoundCloud
          </Link>
        </li>
        <li>
          <Link className="navbar-item" to="#">
            Discord
          </Link>
        </li>
      </ul>
    </Menu>

    <Nav>
      <NavBrand to="/" exact>
        <img src={logo} alt="Thaddeus Jordan" />
      </NavBrand>
      <ul>
        <NavbarItem to="/about">About</NavbarItem>
        <NavbarItem to="#">LinkedIn</NavbarItem>
        <NavbarItem to="#">Facebook</NavbarItem>
        <NavbarItem to="#">Instagram</NavbarItem>
        <NavbarItem to="#">SoundCloud</NavbarItem>
        <NavbarItem to="#">Discord</NavbarItem>
      </ul>
    </Nav>
  </NavWrapper>
);

export default Navbar;
