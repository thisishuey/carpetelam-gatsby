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
            menu(id: "TWVudTo5NQ==") {
              menuItems {
                nodes {
                  id
                  title: label
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
        }
      `}
      render={({ wpgraphql: { generalSettings, menu }, site }) => {
        const links = menu.menuItems.nodes;
        const { brand, tagline } = generalSettings;
        const { company } = site.siteMetadata;
        return (
          <Fragment>
            <Header brand={brand} tagline={tagline} links={links} />
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
