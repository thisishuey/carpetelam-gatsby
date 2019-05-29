const path = require("path");
const _ = require("lodash");
const Promise = require("bluebird");
const slash = require("slash");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const queryAllWordpressPage = graphql(`
    query {
      wpgraphql {
        pages {
          edges {
            node {
              id
              link
            }
          }
        }
      }
    }
  `);
  const queryAllWordpressPost = graphql(`
    query {
      wpgraphql {
        posts {
          edges {
            node {
              id
              link
            }
          }
        }
      }
    }
  `);
  const queryAllWordpressProjects = graphql(`
    query {
      wpgraphql {
        projects {
          edges {
            node {
              id
              link
            }
          }
        }
      }
    }
  `);
  const getPages = new Promise((resolve, reject) => {
    queryAllWordpressPage.then(result => {
      if (result.errors) {
        // eslint-disable-next-line no-console
        console.log(result.errors);
        reject(result.errors);
      }
      const PageContainer = path.resolve("./src/templates/PageTemplate.js");
      _.each(result.data.wpgraphql.pages.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: `/${link.replace("https://wordpress.carpetelam.com/", "")}`,
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
        // eslint-disable-next-line no-console
        console.log(result.errors);
        reject(result.errors);
      }
      const PostContainer = path.resolve("./src/templates/PostTemplate.js");
      _.each(result.data.wpgraphql.posts.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: `/blog/${link.replace(
            "https://wordpress.carpetelam.com/",
            ""
          )}`,
          component: slash(PostContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  const getProjects = new Promise((resolve, reject) => {
    queryAllWordpressProjects.then(result => {
      if (result.errors) {
        // eslint-disable-next-line no-console
        console.log(result.errors);
        reject(result.errors);
      }
      const ProjectContainer = path.resolve(
        "./src/templates/ProjectTemplate.js"
      );
      _.each(result.data.wpgraphql.projects.edges, ({ node }) => {
        const { id, link } = node;
        return createPage({
          path: `/${link.replace("https://wordpress.carpetelam.com/", "")}`,
          component: slash(ProjectContainer),
          context: { id }
        });
      });
      resolve();
    });
  });
  return Promise.all([getPages, getPosts, getProjects]);
};
