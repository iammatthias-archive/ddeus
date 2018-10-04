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

  const caseTemplate = path.resolve("src/templates/case.js");

  pages.data.allPrismicCaseStudy.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: caseTemplate,
      context: {
        uid: edge.node.uid
      }
    });
  });
};
