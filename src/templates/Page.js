import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout.js";
import SEO from "../components/SEO.js";

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

function Page({ data }) {
  const { content, date, title } = data.wordpressPage;
  return (
    <Layout>
      <SEO title={title} />
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <p dangerouslySetInnerHTML={{ __html: date }} />
    </Layout>
  );
}

export default Page;
