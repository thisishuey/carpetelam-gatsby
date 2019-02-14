const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");

const GetWordPressPages = `
  query GetWordPressPages {
    allWordpressPage {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
`;

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(GetWordPressPages)
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const pageTemplate = path.resolve("./src/templates/Page.js");
        _.each(result.data.allWordpressPage.edges, ({ node }) => {
          return createPage({
            path: node.slug,
            component: slash(pageTemplate),
            context: {
              id: node.id
            }
          });
        });
      })
      .then(result => {
        resolve();
      });
  });
};
