import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

function styles(theme) {
  return createStyles({
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -10
    }
  });
}

function Background({ classes }) {
  const { backgroundImage } = classes;
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "screenshot.png" }) {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={({ placeholderImage }) => (
        <Img
          fluid={placeholderImage.childImageSharp.fluid}
          className={backgroundImage}
        />
      )}
    />
  );
}

export default withStyles(styles)(Background);
