import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/Layout.js";
import Parallax from "../components/Parallax.js";
import SEO from "../components/SEO.js";

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

function Page({ classes, data }) {
  const { header, main } = classes;
  const { content, featured_media: featuredMedia, title } = data.wordpressPage;
  const featuredImageSrc =
    featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src;
  return (
    <Layout>
      <SEO title={title} />
      <Parallax image={featuredImageSrc}>
        <div className={header}>
          <Typography
            color="inherit"
            component="h1"
            dangerouslySetInnerHTML={{ __html: title }}
            variant="h1"
          />
        </div>
      </Parallax>
      <Paper className={main}>
        <Typography
          color="inherit"
          component="main"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Paper>
    </Layout>
  );
}

Page.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(Page);

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      title
    }
  }
`;
