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
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={({ site }) => (
        <Fragment>
          <Header siteTitle={site.siteMetadata.title} />
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
            © {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Typography>
        </Fragment>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object
};

export default withRoot(withStyles(styles)(Layout));