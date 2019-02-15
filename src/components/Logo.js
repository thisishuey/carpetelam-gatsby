import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "carpe-telam-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Logo = () => (
  <StaticQuery
    query={query}
    render={({ placeholderImage }) => (
      <Img fluid={placeholderImage.childImageSharp.fluid} />
    )}
  />
);

export default Logo;
