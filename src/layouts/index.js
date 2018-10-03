import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import globals from "../styles/global";
import theme from "../styles/theme";

import favicon from "../img/bruh.jpg";

const Body = styled.div`
  background: linear-gradient(
    45deg,
    rgba(10, 82, 120, 1) 0%,
    rgba(12, 100, 146, 1) 20%,
    rgba(14, 121, 178, 1) 50%,
    rgba(57, 145, 192, 1) 80%,
    rgba(93, 165, 203, 1) 100%
  );
  padding: 1rem;
`;
const Content = styled.div`
  flex: 0 0 auto;
  background: ${props => props.theme.colors.c2};
  overflow-y: auto;
  height: calc(100vh - 2rem);
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Body>
      <Helmet>
        <title>Thaddeus Jordan</title>
        <link rel="icon" type="image/jpg" href={favicon} sizes="16x16" />
      </Helmet>
      <Content>{children()}</Content>
    </Body>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
