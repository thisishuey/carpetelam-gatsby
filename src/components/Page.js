import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";

import Layout from "./Layout.js";
import Parallax from "./Parallax.js";
import SEO from "./SEO.js";
import withRoot from "../utils/withRoot";

function styles(theme) {
  return createStyles({
    main: {
      margin: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * -8,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * -8,
        padding: theme.spacing.unit * 12
      },
      "& a": { color: blue[800] }
    }
  });
}

function Page({ classes, pageData }) {
  const { header, main } = classes;
  const { acf, content, featuredMediaSrc, title } = pageData;
  const { pageSubtitle, pageTitle } = acf;
  return (
    <Layout>
      <SEO title={title} />
      <Parallax image={featuredMediaSrc}>
        <div className={header}>
          <Typography
            color="inherit"
            component="h1"
            dangerouslySetInnerHTML={{ __html: pageTitle || title }}
            variant="h3"
          />
          <Typography
            color="inherit"
            component="h2"
            dangerouslySetInnerHTML={{ __html: pageSubtitle }}
            variant="subtitle1"
          />
        </div>
      </Parallax>
      <Typography
        className={main}
        component={Paper}
        dangerouslySetInnerHTML={{ __html: content }}
        variant="body1"
      />
    </Layout>
  );
}

Page.propTypes = {
  classes: PropTypes.object,
  pageData: PropTypes.object.isRequired // TODO: add shape to pageData
};

export default withRoot(withStyles(styles)(Page));
