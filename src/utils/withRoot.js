import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import getPageContext from "./getPageContext";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

function withRoot(WrappedComponent) {
  // TODO: convert to function
  class WithRoot extends Component {
    constructor(props) {
      super(props);
      this.muiPageContext = getPageContext();
    }
    componentDidMount() {
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
    render() {
      const { generateClassName, sheetsManager, theme } = this.muiPageContext;
      return (
        <JssProvider generateClassName={generateClassName}>
          <MuiThemeProvider sheetsManager={sheetsManager} theme={theme}>
            <CssBaseline />
            <WrappedComponent {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }
  WithRoot.displayName = `WithRoot(${getDisplayName(WrappedComponent)})`;
  return WithRoot;
}

export default withRoot;
