const _ = require("lodash");
const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const queryAllWordpressPage = graphql(`
    query {
      pages: allWordpressPage {
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
      posts: allWordpressPost {
        edges {
          node {
            id
            link
          }
        }
      }
    }
  `);
  const queryAllWordpressWpProjects = graphql(`
    query {
      projects: allWordpressWpProjects {
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
      _.each(result.data.pages.edges, ({ node }) => {
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
      _.each(result.data.posts.edges, ({ node }) => {
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
  const getProjects = new Promise((resolve, reject) => {
    queryAllWordpressWpProjects.then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      const ProjectContainer = path.resolve(
        "./src/templates/ProjectContainer.js"
      );
      _.each(result.data.projects.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: link,
          component: slash(ProjectContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  return Promise.all([getPages, getPosts, getProjects]);
};
