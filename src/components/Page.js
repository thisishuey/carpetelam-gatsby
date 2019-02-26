import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "./Layout.js";
import Parallax from "./Parallax.js";
import SEO from "./SEO.js";

function styles(theme) {
  return createStyles({
    main: {
      margin: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * -6,
      padding: theme.spacing.unit * 3,
      width: "auto"
    }
  });
}

function Page({ classes, pageData }) {
  const { main } = classes;
  const { content, featuredMedia, title } = pageData;
  const featuredImageSrc =
    featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src;
  return (
    <Layout>
      <SEO title={title} />
      <Parallax image={featuredImageSrc}>
        <Typography
          color="inherit"
          component="h1"
          dangerouslySetInnerHTML={{ __html: title }}
          variant="h3"
        />
        <Typography
          color="inherit"
          component="h2"
          dangerouslySetInnerHTML={{ __html: title }}
          variant="body1"
        />
      </Parallax>
      <Typography
        className={main}
        color="inherit"
        component={Paper}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  );
}

Page.propTypes = {
  classes: PropTypes.object,
  pageData: PropTypes.object.isRequired
};

export default withStyles(styles)(Page);
