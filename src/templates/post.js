import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import styled from "react-emotion";
import Image from "gatsby-image";
import { Box } from "grid-emotion";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import config from "../utils/siteConfig";

const Hero = styled.section`
  width: 100%;
  height: 61.8vh;
  position: relative;
  overflow: hidden;
  .gatsby-image-outer-wrapper {
    position: static !important;
    > div {
      position: static !important;
    }
  }
`;

const Wrapper = styled(Box)`
  max-width: ${props => props.theme.maxWidth};
`;

const TitleWrapper = styled(Box)`
  width: 100%;
  padding: 4.5rem 2rem;
  background: ${props => props.theme.colors.bg};
  text-align: center;
`;

const Title = styled.h1`
  max-width: ${props => props.theme.maxWidthText};
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin: 0 auto;
  padding: 0 32px;
`;

const SubTitle = styled.h3`
  max-width: ${props => props.theme.maxWidthText};
  color: ${props => props.theme.colors.text};
  margin: 0 auto;
  padding: 0.5rem;
`;
const Date = styled.h3`
  max-width: ${props => props.theme.maxWidthText};
  color: ${props => props.theme.colors.text};
  margin: 0 auto;
  padding: 0.5rem;
`;

const Content = styled.main`
  margin-top: 4.5rem;
  margin-bottom: 9rem;
  p {
    text-align: justify;
  }
  p,
  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  blockquote {
    max-width: ${props => props.theme.maxWidthText};
    margin-left: auto;
    margin-right: auto;
  }
  li {
    margin-left: 1.45rem;
  }
  .block-img {
    max-width: 100%;
    margin-top: 6rem;
    margin-bottom: 6rem;
    text-align: center;
  }
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    margin-top: 6rem;
    margin-bottom: 6rem;
    .block-img {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`;

const PostTemplate = ({ data: { prismicCaseStudy: caseNode } }) => {
  const { data } = caseNode;
  return (
    <Layout>
      <Helmet title={`${data.title.text} | ${config.siteTitle}`} />
      <SEO caseNode={caseNode} casePath={caseNode.uid} caseSEO />
      <Hero>
        <Image sizes={data.header_image.localFile.childImageSharp.sizes} />
      </Hero>
      <Wrapper>
        <TitleWrapper>
          <Title>{data.title.text}</Title>
          <SubTitle>{data.subtitle.text}</SubTitle>
          <Date>{caseNode.last_publication_date}</Date>
        </TitleWrapper>
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </Wrapper>
      <Footer isCase />
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query CaseBySlug($uid: String!) {
    prismicCaseStudy(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        header_image {
          localFile {
            childImageSharp {
              sizes(
                maxWidth: 1920
                quality: 90
                traceSVG: { color: "#021212" }
              ) {
                ...GatsbyImageSharpSizes_withWebp_tracedSVG
              }
              resize(width: 800) {
                src
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
        content {
          html
        }
      }
    }
  }
`;
