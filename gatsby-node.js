const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicCaseStudy {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const postTemplate = path.resolve("src/templates/post.js");

  pages.data.allPrismicCaseStudy.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid
      }
    });
  });
};
