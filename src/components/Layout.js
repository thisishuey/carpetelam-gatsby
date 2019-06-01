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
          allCookiePolicy {
            nodes {
              content
            }
          }
          allPrivacyPolicy {
            nodes {
              content
            }
          }
          site {
            siteMetadata {
              company
            }
          }
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
        }
      `}
      render={({
        allCookiePolicy,
        allPrivacyPolicy,
        site,
        wpgraphql: { generalSettings, menu }
      }) => {
        const links = menu.menuItems.nodes;
        const { brand, tagline } = generalSettings;
        const { company } = site.siteMetadata;
        return (
          <Fragment>
            <Header brand={brand} tagline={tagline} links={links} />
            {children}
            <Footer
              company={company}
              cookiePolicy={
                allCookiePolicy.nodes.filter(node => node.content !== null)[0]
                  .content
              }
              privacyPolicy={
                allPrivacyPolicy.nodes.filter(node => node.content !== null)[0]
                  .content
              }
            />
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
