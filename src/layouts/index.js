import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import favicon from "../img/bruh.jpg";

import Navbar from "../components/Navbar";
import "./all.sass";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Content = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
`;

const TemplateWrapper = ({ children }) => (
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
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
