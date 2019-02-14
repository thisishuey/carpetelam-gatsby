import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout.js";
import SEO from "../components/SEO.js";

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

export const GetWordPressPageByID = graphql`
  query GetWordPressPageByID($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;
