import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            generalSettings {
              brand: title
              tagline: description
            }
            menus(where: { slug: "primary" }) {
              edges {
                node {
                  menuItems {
                    edges {
                      node {
                        id
                        title: label
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          site {
            siteMetadata {
              company
            }
          }
        }
      `}
      render={({ wpgraphql: { generalSettings, menus }, site }) => {
        const items = menus.edges[0].node.menuItems.edges.map(
          ({ node: { id, title, url } }) => ({ id, title, url })
        );
        const { brand, tagline } = generalSettings;
        const { company } = site.siteMetadata;
        return (
          <Fragment>
            <Header brand={brand} tagline={tagline} links={items} />
            {children}
            <Footer company={company} />
          </Fragment>
        );
      }}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
