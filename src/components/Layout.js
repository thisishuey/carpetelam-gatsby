import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Footer from "./Footer";
import Header from "./Header";
import withRoot from "../utils/withRoot";

function Layout({ children, classes }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpApiMenusMenusItems(
            filter: { slug: { eq: "primary" } }
          ) {
            edges {
              node {
                items {
                  object_id
                  order
                  title
                  url
                }
              }
            }
          }
          site {
            siteMetadata {
              company
            }
          }
          wordpressSiteMetadata {
            description
            name
          }
        }
      `}
      render={({
        allWordpressWpApiMenusMenusItems: menus,
        site,
        wordpressSiteMetadata
      }) => {
        const { items } = menus.edges[0].node;
        const { company } = site.siteMetadata;
        const { description, name } = wordpressSiteMetadata;
        return (
          <Fragment>
            <Header brand={name} tagline={description} links={items} />
            {children}
            <Footer company={company} />
          </Fragment>
        );
      }}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object
};

export default withRoot(Layout);
