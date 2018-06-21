import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Wrapper = styled.div`
  margin: 1.5rem;
  ${breakpoint("lg")`
margin: 0rem;
`};
`;

const Hero = styled.section`
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1.5rem;
`;
const HeroBlurb = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem;
`;

const Section = styled.section`
  padding: 0;
  width: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${breakpoint("lg")`
  grid-template-columns: 1fr 1fr;
`};
`;
const GridItem = styled(Link)`
  margin-bottom: 1.5rem;
  border: 1px solid #eaecee;
  padding: 2rem 4rem;
  ${breakpoint("lg")`
  margin: 1.5rem;
`};
`;
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #e62b02;
`;
const PostDate = styled.h4`
  font-size: 1rem;
  font-weight: 700;
`;
const Excerpt = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  border-radius: 2px;
  font-size: 0.75rem;
  background: none;
  border: 1px solid #eaecee;
  padding: 0.5rem 1rem;
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper>
        <Hero>
          <HeroTitle>Thaddeus Jordan</HeroTitle>
          <HeroBlurb>Just an egg with a guitar.</HeroBlurb>
        </Hero>
        <Section>
          <SectionTitle>Latest</SectionTitle>
          <Grid>
            {posts.map(({ node: post }) => (
              <GridItem key={post.id} to={post.fields.slug}>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostDate>
                  <br />
                  {post.frontmatter.date}
                </PostDate>
                <Excerpt>{post.excerpt}</Excerpt>
                <Button>Keep Reading →</Button>
              </GridItem>
            ))}
          </Grid>
        </Section>
      </Wrapper>
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

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
