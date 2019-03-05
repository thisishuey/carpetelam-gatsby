import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import LinkList from "../components/LinkList";

function ProjectsContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpProjects {
            edges {
              node {
                content
                id
                link
                title
              }
            }
          }
        }
      `}
      render={({ allWordpressWpProjects }) => {
        const projects = allWordpressWpProjects.edges.map(edge => edge.node);
        return <LinkList items={projects} />;
      }}
    />
  );
}

ProjectsContainer.propTypes = {
  data: PropTypes.object
};

export default ProjectsContainer;
