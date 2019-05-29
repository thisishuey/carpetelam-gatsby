import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import theme from "../theme";

function MuiLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Fragment>
  );
}

MuiLayout.propTypes = {
  children: PropTypes.node
};

export default MuiLayout;
