import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
      "& a": { color: theme.palette.primary.main, textDecoration: "none" }
    }
  });
}

function Page({ classes, pageData }) {
  const { main } = classes;
  const { acf, content, featuredMediaSrc, title } = pageData;
  const { pageSubtitle, pageTitle } = acf;
  return (
    <Layout>
      <SEO title={title} />
      <Parallax
        backgroundImage={featuredMediaSrc}
        pageTitle={pageTitle || title}
        pageSubtitle={pageSubtitle}
      />
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
