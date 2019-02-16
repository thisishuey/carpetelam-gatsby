import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

import Header from "./Header";
import withRoot from "../utils/withRoot";

function styles(theme) {
  return createStyles({
    centerContent: {
      width: "auto",
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
        width: 900,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  });
}

function Layout({ children, classes }) {
  const { centerContent } = classes;
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
          allWordpressWpApiMenusMenusItems(
            filter: { slug: { eq: "primary" } }
          ) {
            edges {
              node {
                items {
                  object_id
                  order
                  title
                  url
                }
              }
            }
          }
        }
      `}
      render={({ allWordpressWpApiMenusMenusItems: menus, site }) => {
        const { items } = menus.edges[0].node;
        const { title } = site.siteMetadata;
        return (
          <Fragment>
            <Header navItems={items} siteTitle={title} />
            <Typography
              className={centerContent}
              color="inherit"
              component="main"
            >
              {children}
            </Typography>
            <Typography
              className={centerContent}
              color="inherit"
              component="footer"
            >
              © {new Date().getFullYear()}, Carpe Telam, LLC. Headless CMS
              powered by{" "}
              <a
                href="https://wordpress.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                WordPress
              </a>{" "}
              Static HTML built with{" "}
              <a
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gatsby
              </a>
            </Typography>
          </Fragment>
        );
      }}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object
};

export default withRoot(withStyles(styles)(Layout));
