import React, { Component, Fragment } from "react";
import { graphql } from "gatsby";

class Page extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage;

    return (
      <Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Fragment>
    );
  }
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
