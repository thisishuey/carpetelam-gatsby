import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page.js";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function ProjectContainer({ data }) {
  const parsedContent = parseShortcodesInString(
    data.wordpressWpProjects.content
  );
  const pageData = {
    ...data.wordpressWpProjects,
    acf: {}, // TODO clean this up
    parsedContent
  };
  return <Page pageData={pageData} />;
}

ProjectContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectContainer;

export const query = graphql`
  query($id: String!) {
    wordpressWpProjects(id: { eq: $id }) {
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
