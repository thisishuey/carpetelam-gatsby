const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const GetWordPressPages = graphql(`
    query GetWordPressPages {
      allWordpressPage {
        edges {
          node {
            id
            link
            slug
          }
        }
      }
    }
  `);
  return new Promise((resolve, reject) => {
    GetWordPressPages.then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const PageContainer = path.resolve("./src/templates/PageContainer.js");
      _.each(result.data.allWordpressPage.edges, ({ node }) => {
        return createPage({
          path: node.link,
          component: slash(PageContainer),
          context: {
            id: node.id
          }
        });
      });
    }).then(result => {
      resolve();
    });
  });
};
