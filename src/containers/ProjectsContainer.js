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
              nodes {
                content
                id
                link
                menuOrder
                title
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { projects } }) => {
        return (
          <LinkList
            items={projects.nodes
              .slice()
              .sort((a, b) => a.menuOrder - b.menuOrder)}
          />
        );
      }}
    />
  );
}

ProjectsContainer.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      projects: PropTypes.array
    })
  })
};

export default ProjectsContainer;
