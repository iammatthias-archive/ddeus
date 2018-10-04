import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "react-emotion";
import { Flex } from "grid-emotion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import GridItem from "../components/GridItem";

const Header = styled.header`
  width: 100%;
  height: 61.8vh;
  position: relative;
  padding: 1.75rem;
`;

const Hero = styled(Flex)`
  height: 100%;
  text-align: center;
  h1 {
    letter-spacing: 0.2rem;
    line-height: 4.5rem;
  }
  h3 {
    font-size: 1.85rem;
    font-weight: 400;
  }
  h4 {
    font-size: 1.25rem;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    h1 {
      line-height: 3.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: ${props => props.theme.breakpoint.s}) {
    h1 {
      line-height: 2.5rem;
    }
  }
`;

const Wrapper = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
`;

const Contact = styled(Wrapper)`
  margin: 0 auto;
  h1,
  h2,
  h3 {
    color: ${props => props.theme.colors.text};
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.85rem;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    font-size: 1.5rem;
  }
`;

const IndexPage = ({
  data: {
    caseStudies: { edges }
  }
}) => (
  <Layout>
    <Header>
      <Hero justifyContent="center" alignItems="center" flexDirection="column">
        <h4>2018</h4>
        <h3>The Thad</h3>
        <h1>is under development.</h1>
      </Hero>
    </Header>
    <Wrapper
      p={4}
      mb={[4, 4, 7]}
      mx="auto"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      {edges.map(c => (
        <GridItem
          uid={c.node.uid}
          key={c.node.uid}
          sizes={c.node.data.header_image.localFile.childImageSharp.sizes}
          alt={c.node.data.title.text}
          title={c.node.data.title.text}
          subtitle={c.node.data.subtitle.text}
        />
      ))}
    </Wrapper>

    <Contact
      px={4}
      py={6}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <h1>Say hi!</h1>
      <h3>contact@domain.com</h3>
    </Contact>
    <Footer />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            header_image {
              localFile {
                childImageSharp {
                  sizes(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`;
