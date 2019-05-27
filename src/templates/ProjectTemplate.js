import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Page from "../components/Page";
import parseShortcodesInString from "../utils/parseShortcodesInString";

function ProjectContainer({ data }) {
  const { project } = data.wpgraphql;
  const parsedContent = parseShortcodesInString(project.content);
  const pageData = { ...project, parsedContent };
  return <Page pageData={pageData} />;
}

ProjectContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProjectContainer;

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      project(id: $id) {
        content
        id
        title
      }
    }
  }
`;
