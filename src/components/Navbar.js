import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { slide as SideMenu } from "react-burger-menu";

import instagram from "../img/insta-icon.svg";
import logo from "../img/tad_logo.svg";
import close from "../img/close.svg";

const NavWrapper = styled.nav`
  padding: 0rem;
  text-align: center;
  ${breakpoint("lg")`
    max-width: 20rem;
    width: 100%;
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
  div .bm-menu-wrap {
    margin-top: -1rem;
  }
`;
const Nav = styled.div`
  display: none;
  ${breakpoint("lg")`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: sticky;
top: 20px;
`};
`;
const NavBrand = styled(Link)`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
  position: static;
  img {
    display: block;
    max-width: 5rem;
    margin: 0 auto;
  }
`;
const NavbarList = styled.ul`
  padding: 0;
`;
const NavbarItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  a {
    color: ${props => props.theme.colors.c1};
    text-decoration: none;
    width: 100%;
    text-align: center;
  }
`;

const BurgerMenuWrapper = styled.i`
  display: block;
  ${breakpoint("lg")`
display: none;
`};
`;

const Menu = styled(SideMenu)`
  display: block;
  background: ${props => props.theme.colors.c4};
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
    background: "#FE5F55"
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
    background: "#EBF2F4",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#EBF2F4"
  },
  bmItemList: {
    color: "#001F3F",
    padding: "0.8em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "#EBF2F4"
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
      <NavbarList>
        <NavbarItem>
          <NavBrand to="/" exact>
            <img src={logo} alt="Thaddeus Jordan" />
          </NavBrand>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">LinkedIn</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Facebook</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Instagram</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">SoundCloud</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Discord</Link>
        </NavbarItem>
      </NavbarList>
    </Menu>

    <Nav>
      <NavBrand to="/" exact>
        <img src={logo} alt="Thaddeus Jordan" />
      </NavBrand>
      <NavbarList>
        <NavbarItem>
          <Link to="/about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">LinkedIn</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Facebook</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Instagram</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">SoundCloud</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="#">Discord</Link>
        </NavbarItem>
      </NavbarList>
    </Nav>
  </NavWrapper>
);

export default Navbar;
