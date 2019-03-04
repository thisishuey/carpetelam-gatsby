import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page.js";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function PostContainer({ data }) {
  const parsedContent = parseShortcodesInString(data.wordpressPost.content);
  const pageData = {
    ...data.wordpressPost,
    parsedContent
  };
  return <Page pageData={pageData} />;
}

PostContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostContainer;

export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      content
      id
      featuredMedia: featured_media {
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
