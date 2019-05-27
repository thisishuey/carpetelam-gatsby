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
              edges {
                node {
                  content
                  id
                  title
                }
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { services } }) => {
        return <ItemList items={services.edges.map(edge => edge.node)} />;
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
