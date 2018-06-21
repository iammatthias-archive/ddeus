import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import theme from "../styles/theme";

import favicon from "../img/bruh.jpg";

import Navbar from "../components/Navbar";
import "./all.sass";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  ${breakpoint("lg")`
  flex-direction: row;
`};
`;
const Content = styled.div`
  flex: 0 0 auto;
  overflow-y: auto;
  ${breakpoint("lg")`
  flex: 1 1 auto;
`};
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet>
        <title>Thaddeus Jordan</title>
        <link rel="icon" type="image/jpg" href={favicon} sizes="16x16" />
      </Helmet>
      <Wrapper>
        <Navbar />
        <Content>{children()}</Content>
      </Wrapper>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
