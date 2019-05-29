import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import ItemList from "../components/ItemList";

function ServicesContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            services {
              nodes {
                content
                id
                menuOrder
                title
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { services } }) => {
        return (
          <ItemList
            items={services.nodes
              .slice()
              .sort((a, b) => a.menuOrder - b.menuOrder)}
          />
        );
      }}
    />
  );
}

ServicesContainer.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      services: PropTypes.object
    })
  })
};

export default ServicesContainer;
