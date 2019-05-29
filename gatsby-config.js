require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: "Carpe Telam",
    subtitle: "Seize the Web",
    description:
      "At Carpe Telam we aim to Seize the Web with quality and speed!",
    author: 'Jeff "Huey" Huelsbeck',
    email: "huey@carpetelam.com",
    company: "Carpe Telam, LLC"
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-playground",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-33919615-3"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "carpetelam-gatsby",
        /* eslint-disable babel/camelcase */
        short_name: "carpetelam",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        /* eslint-enable babel/camelcase */
        display: "minimal-ui",
        icon: "src/images/ipsum.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: "https://wordpress.carpetelam.com/graphql"
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-netlify" // this must go last
  ]
};
