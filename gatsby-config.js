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
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "carpetelam-gatsby",
        short_name: "carpetelam",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/ipsum.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "carpetelam-com.carpetelam.net",
        protocol: "https",
        hostingWPCOM: false,
        verboseOutput: false,
        searchAndReplaceContentUrls: {
          sourceUrl: "https://carpetelam-com.carpetelam.net/",
          replacementUrl: "/"
        },
        excludedRoutes: [
          "/ithemes-security/**",
          "**/*/*/users/me",
          "**/*/*/settings",
          "**/*/*/themes"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Roboto",
            variants: [
              "300",
              "300i",
              "400",
              "400i",
              "500",
              "500i",
              "700",
              "700i"
            ]
          },
          {
            family: "Roboto Slab",
            variants: ["300", "400", "700"]
          }
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    "gatsby-plugin-netlify" // this must go last
  ]
};
