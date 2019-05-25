import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function PageTemplate({ data }) {
  const parsedContent = parseShortcodesInString(data.wordpressPage.content);
  const pageData = {
    ...data.wordpressPage,
    parsedContent
  };
  return <Page pageData={pageData} />;
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      acf {
        pageTitle
        pageSubtitle
      }
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
