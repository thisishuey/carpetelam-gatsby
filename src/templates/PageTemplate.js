import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function PageTemplate({ data }) {
  const parsedContent = parseShortcodesInString(data.wpgraphql.page.content);
  const pageData = {
    ...data.wpgraphql.page,
    parsedContent
  };
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
      }
    }
  }
`;
