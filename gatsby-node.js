const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const queryAllWordpressPage = graphql(`
    query {
      allWordpressPage {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `);
  const queryAllWordpressPost = graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `);
  const getPages = new Promise((resolve, reject) => {
    queryAllWordpressPage.then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const PageContainer = path.resolve("./src/templates/PageContainer.js");
      _.each(result.data.allWordpressPage.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: link,
          component: slash(PageContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  const getPosts = new Promise((resolve, reject) => {
    queryAllWordpressPost.then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const PostContainer = path.resolve("./src/templates/PostContainer.js");
      _.each(result.data.allWordpressPost.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: `/blog${link}`,
          component: slash(PostContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  return Promise.all([getPages, getPosts]);
};
