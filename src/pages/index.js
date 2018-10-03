import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 85%;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.c4};
`;
const HeroBlurb = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem;
  text-align: center;
  line-height: 1rem;
  color: ${props => props.theme.colors.c4};
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <Hero>
        <HeroTitle>2018</HeroTitle>
        <HeroTitle>Thaddeus Jordan</HeroTitle>
        <HeroBlurb>Site under construction.</HeroBlurb>
        <HeroBlurb>Update coming soon.</HeroBlurb>
      </Hero>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};
