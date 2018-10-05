import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";
import { Link } from "gatsby";
import { Flex } from "grid-emotion";

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.greyDark};
  color: ${props => props.theme.colors.greyLight};
  padding: 0.75rem 4rem;
  a {
    color: ${props => props.theme.colors.bg};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`;

const Inner = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  div:last-child {
    margin-top: 1rem;
  }
`;

const StyledLink = styled(Link)`
  transform: translateX(0);
  transition: all 200ms ease-out;
  &:before {
    content: "←";
    padding-right: 8px;
  }
  &:hover {
    color: ${props => props.theme.colors.bg};
    transform: translateX(-6px);
  }
`;
const Source = styled.p`
  justify-self: end !important;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Inner>
        {isCase ? (
          <React.Fragment>
            <StyledLink to="/">Return to home</StyledLink>
            <Source>
              Source: <a href="https://github.com/iammatthias/ddeus">Github</a>
            </Source>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Source>
              Source: <a href="https://github.com/iammatthias/ddeus">Github</a>
            </Source>
          </React.Fragment>
        )}
      </Inner>
    </Wrapper>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool
};

Footer.defaultProps = {
  isCase: false
};
