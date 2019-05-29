import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function PostContainer({ data }) {
  const { post } = data.wpgraphql;
  const parsedContent = parseShortcodesInString(post.content);
  const pageData = { ...post, parsedContent };
  return <Page pageData={pageData} />;
}

PostContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostContainer;

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      post(id: $id) {
        content
        id
        title
        featuredImage {
          sourceUrl
        }
      }
    }
  }
`;
