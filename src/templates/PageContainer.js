import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page.js";
import withRoot from "../utils/withRoot";

function PageContainer({ data }) {
  const featuredMedia = data.wordpressPage.featured_media;
  const pageData = {
    ...data.wordpressPage,
    featured_media: undefined,
    featuredMediaSrc:
      featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src
  };
  return <Page pageData={pageData} />;
}

PageContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default withRoot(PageContainer);

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
