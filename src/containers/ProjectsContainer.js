import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import LinkList from "../components/LinkList";

function ProjectsContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpProjects(sort: { fields: [menu_order], order: ASC }) {
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
