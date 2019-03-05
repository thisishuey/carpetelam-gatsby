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
    wpContent: {
      margin: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit * -8,
      padding: theme.spacing.unit * 2,
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * -8,
        padding: theme.spacing.unit * 12
      },
      "& h1": { ...theme.typography.h1 },
      "& h2": { ...theme.typography.h2 },
      "& h3": { ...theme.typography.h3 },
      "& h4": { ...theme.typography.h4 },
      "& h5": { ...theme.typography.h5 },
      "& h6": { ...theme.typography.h6 },
      "& a": { color: theme.palette.primary.main, textDecoration: "none" }
    }
  });
}

function Page({ classes, pageData }) {
  const { wpContent } = classes;
  const { acf = {}, id, featuredMedia, parsedContent, title } = pageData;
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
        backgroundImageSrc={
          featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src
        }
        pageTitle={pageTitle || title}
        pageSubtitle={pageSubtitle}
      />
      <Typography className={wpContent} component={Paper} variant="body1">
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
