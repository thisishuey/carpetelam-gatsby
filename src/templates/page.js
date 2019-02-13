import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout.js";

function Page({ content, date, title }) {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p dangerouslySetInnerHTML={{ __html: date }} />
    </Layout>
  );
}

export default Page;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;
