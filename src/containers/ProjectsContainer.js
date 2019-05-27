import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import LinkList from "../components/LinkList";

function ProjectsContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            projects {
              edges {
                node {
                  content
                  id
                  link
                  menuOrder
                  title
                }
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { projects } }) => {
        return <LinkList items={projects.edges.map(edge => edge.node)} />;
      }}
    />
  );
}

ProjectsContainer.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      projects: PropTypes.object
    })
  })
};

export default ProjectsContainer;
