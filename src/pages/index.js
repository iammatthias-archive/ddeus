import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'react-emotion'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import GridItem from '../components/GridItem'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 4rem;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    padding: 2rem;
  }
`

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;
  @media (max-width: ${props => props.theme.breakpoint.m}) {
    padding: 2rem;
  }
`

const Contact = styled(Wrapper)`
  margin: 0 auto;
`
const IndexPage = ({ data, edges }) => {
  const home = data.homePage.edges
  const blog = data.caseStudies.edges
  return (
    <Layout>
      <Header>
        {home.map(({ node: homepage }) => (
          <Hero
            key={homepage.uid}
            preheader={homepage.data.preheader.text}
            title={homepage.data.title.text}
            subheader={homepage.data.subheader.text}
            bio={homepage.data.bio.html}
            sizes={homepage.data.picture.localFile.childImageSharp.fluid}
          />
        ))}
      </Header>
      <Wrapper>
        {blog.map(({ node: blogposts }) => (
          <GridItem
            uid={blogposts.uid}
            key={blogposts.uid}
            date={blogposts.last_publication_date}
            sizes={blogposts.data.header_image.localFile.childImageSharp.fluid}
            alt={blogposts.data.title.text}
            title={blogposts.data.title.text}
            subtitle={blogposts.data.subtitle.text}
          />
        ))}
      </Wrapper>
      <ContactForm />
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          last_publication_date(formatString: "MMMM DD YYYY")
          data {
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 1000
                    traceSVG: { color: "#021212" }
                    cropFocus: ATTENTION
                    duotone: {
                      highlight: "#f00e2e"
                      shadow: "#192550"
                      opacity: 15
                    }
                    toFormat: PNG
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
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
    homePage: allPrismicHomePage {
      edges {
        node {
          uid
          data {
            preheader {
              text
            }
            title {
              text
            }
            subheader {
              text
            }
            bio {
              html
            }
            picture {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 1200
                    maxHeight: 1350
                    traceSVG: { color: "#021212" }
                    cropFocus: NORTH
                    duotone: {
                      highlight: "#f00e2e"
                      shadow: "#192550"
                      opacity: 15
                    }
                    toFormat: PNG
                  ) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
