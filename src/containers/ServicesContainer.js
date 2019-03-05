import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import ItemList from "../components/ItemList";

function ServicesContainer({ classes, named }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpServices {
            edges {
              node {
                content
                id
                title
              }
            }
          }
        }
      `}
      render={({ allWordpressWpServices }) => {
        const services = allWordpressWpServices.edges.map(edge => edge.node);
        return <ItemList items={services} />;
      }}
    />
  );
}

ServicesContainer.propTypes = {
  data: PropTypes.object
};

export default ServicesContainer;
