import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "./Layout.js";
import Parallax from "./Parallax.js";
import SEO from "./SEO.js";
import { shortcodes } from "../utils/shortcodes";
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
  const { acf, id, featuredMedia, parsedContent, title } = pageData;
  const featuredMediaSrc =
    featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src;
  const { pageSubtitle, pageTitle } = acf;
  const content = parsedContent.map((chunk, index) => {
    if (chunk.type === "string") {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: chunk.content }}
          key={`string-${id}-${index}`}
        />
      );
    } else {
      const Element = shortcodes[chunk.name].component;
      return (
        <Element
          key={`${chunk.name}-${id}-${index}`}
          name={chunk.name}
          title={title}
          entityId={id}
          {...chunk.attributes}
        >
          {chunk.content}
        </Element>
      );
    }
  });
  return (
    <Layout>
      <SEO title={title} />
      <Parallax
        backgroundImage={featuredMediaSrc}
        pageTitle={pageTitle || title}
        pageSubtitle={pageSubtitle}
      />
      <Typography className={main} component={Paper} variant="body1">
        {content}
      </Typography>
    </Layout>
  );
}

Page.propTypes = {
  classes: PropTypes.object,
  pageData: PropTypes.object.isRequired // TODO: add shape to pageData
};

export default withRoot(withStyles(styles)(Page));
