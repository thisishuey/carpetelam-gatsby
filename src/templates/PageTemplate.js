import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function PageTemplate({ data }) {
  const { page } = data.wpgraphql;
  const parsedContent = parseShortcodesInString(page.content);
  const pageData = { ...page, parsedContent };
  return <Page pageData={pageData} />;
}

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired
};

export default PageTemplate;

// acf {
//   pageTitle
//   pageSubtitle
// }
export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
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
