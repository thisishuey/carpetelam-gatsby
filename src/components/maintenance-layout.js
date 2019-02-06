import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "./maintenance-layout.css";

const MaintenanceLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MaintenanceTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <div
          style={{
            margin: "5rem auto 0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer style={{ textAlign: "center" }}>
            <h6>© {new Date().getFullYear()}, Carpe Telam, LLC</h6>
          </footer>
        </div>
      </Fragment>
    )}
  />
);

MaintenanceLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MaintenanceLayout;
