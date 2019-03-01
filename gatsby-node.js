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
      allWordpressPost(
        filter: { categories: { elemMatch: { slug: { ne: "projects" } } } }
      ) {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `);
  const queryAllWordpressPortfolio = graphql(`
    query {
      allWordpressPost(
        filter: { categories: { elemMatch: { slug: { eq: "projects" } } } }
      ) {
        edges {
          node {
            id
            slug
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
      console.log(JSON.stringify(result, null, 2));
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
      console.log(JSON.stringify(result, null, 2));
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
  const getPortfolios = new Promise((resolve, reject) => {
    queryAllWordpressPortfolio.then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      console.log(JSON.stringify(result, null, 2));
      const PostContainer = path.resolve("./src/templates/PostContainer.js");
      _.each(result.data.allWordpressPost.edges, ({ node }) => {
        const { id, slug } = node;
        return createPage({
          path: `/projects/${slug}/`,
          component: slash(PostContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  return Promise.all([getPages, getPosts, getPortfolios]);
};
