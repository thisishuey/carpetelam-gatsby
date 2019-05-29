import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { shortcodes } from "../utils/shortcodes";
import Layout from "./Layout";
import Parallax from "./Parallax";
import Seo from "./SEO";

const useStyles = makeStyles(theme => ({
  wpContent: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(-8),
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4),
      marginTop: theme.spacing(-8),
      padding: theme.spacing(12)
    },
    "& h1": { ...theme.typography.h1 },
    "& h2": { ...theme.typography.h2 },
    "& h3": { ...theme.typography.h3 },
    "& h4": { ...theme.typography.h4 },
    "& h5": { ...theme.typography.h5 },
    "& h6": { ...theme.typography.h6 },
    "& a": { color: theme.palette.primary.main, textDecoration: "none" }
  }
}));

function Page({ pageData }) {
  const { wpContent } = useStyles();
  const { acf = {}, id, featuredImage, parsedContent, title } = pageData;
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
      <Seo title={title} />
      <Parallax
        backgroundImageSrc={featuredImage && featuredImage.sourceUrl}
        pageTitle={pageTitle || title}
        pageSubtitle={pageSubtitle}
      />
      <Typography className={wpContent} component={Paper}>
        {content}
      </Typography>
    </Layout>
  );
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired // TODO: add shape to pageData
};

export default Page;
