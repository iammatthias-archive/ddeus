import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import globals from "../styles/global";
import theme from "../styles/theme";

import favicon from "../img/bruh.jpg";

import Navbar from "../components/Navbar";

const Body = styled.div`
  background: linear-gradient(
    45deg,
    rgba(10, 82, 120, 1) 0%,
    rgba(12, 100, 146, 1) 20%,
    rgba(14, 121, 178, 1) 50%,
    rgba(57, 145, 192, 1) 80%,
    rgba(93, 165, 203, 1) 100%
  );
  animation: Gradient 30s ease infinite;

  @keyframes Gradient {
    0% {
      background-position: 0% 90%;
    }
    50% {
      background-position: 100% 11%;
    }
    100% {
      background-position: 0% 90%;
    }
  }
  padding: 1rem;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.c4};
  ${breakpoint("lg")`
  flex-direction: row;
`};
`;
const Content = styled.div`
  flex: 0 0 auto;
  background: ${props => props.theme.colors.c2};
  overflow-y: auto;
  min-height: 100vh;
  ${breakpoint("lg")`
  flex: 1 1 auto;
  width: 100%;
`};
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Body>
      <Helmet>
        <title>Thaddeus Jordan</title>
        <link rel="icon" type="image/jpg" href={favicon} sizes="16x16" />
      </Helmet>
      <Wrapper>
        <Navbar />
        <Content>{children()}</Content>
      </Wrapper>
    </Body>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
