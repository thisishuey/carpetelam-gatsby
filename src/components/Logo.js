import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const GetLogoImage = graphql`
  query GetLogoImage {
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
    query={GetLogoImage}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);

export default Logo;
