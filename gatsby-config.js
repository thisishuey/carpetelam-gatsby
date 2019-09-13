require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  plugins: [
    "gatsby-plugin-playground",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-theme-material-ui",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TC7FH4P"
      }
    },
    {
      resolve: "gatsby-plugin-iubenda-cookie-footer",
      options: {
        iubendaOptions: {
          banner: {
            position: "bottom"
          },
          cookiePolicyId: 84963270,
          lang: "en",
          siteId: 1599973
        }
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
        icon: "src/images/ipsum.png"
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "cookiePolicy",
        url: "https://www.iubenda.com/api/privacy-policy/84963270/cookie-policy"
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        name: "privacyPolicy",
        url: "https://www.iubenda.com/api/privacy-policy/84963270"
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
  ],
  siteMetadata: {
    title: "Carpe Telam",
    subtitle: "Seize the Web",
    description:
      "At Carpe Telam we aim to Seize the Web with quality and speed!",
    author: 'Jeff "Huey" Huelsbeck',
    email: "huey@carpetelam.com",
    company: "Carpe Telam, LLC"
  }
};
