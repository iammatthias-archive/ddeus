import React from "react";
import PropTypes from "prop-types";
import Content, { HTMLContent } from "../components/Content";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Section = styled.section`
  padding: 1.5rem 3rem;
  width: 100%;
  color: ${props => props.theme.colors.c4};
  ${breakpoint("lg")`
  padding: 5rem 10rem;
`};
`;

const PageTitle = styled.h2`
  color: ${props => props.theme.colors.c4};
`;

export const AboutPageTemplate = ({
  title,
  image,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <PageContent className="content" content={content} />
    </Section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image
      }
    }
  }
`;
