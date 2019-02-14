const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");

const pagesQuery = `
  {
    allWordpressPage {
      edges {
        node {
          id
          slug
          status
          template
        }
      }
    }
  }
`;

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(pagesQuery)
      .then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        const pageTemplate = path.resolve("./src/templates/page.js");
        _.each(result.data.allWordpressPage.edges, ({ node }) => {
          createPage({
            path: `/${node.slug}/`,
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
