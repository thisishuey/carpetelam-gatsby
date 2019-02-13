import React from "react";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jssPreset from "@material-ui/core/styles/jssPreset";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
});

const jss = create(jssPreset());
const generateClassName = createGenerateClassName;

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

export default function withRoot(WrappedComponent) {
  function WithRoot(props) {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <WrappedComponent {...props} />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
  WithRoot.displayName = `WithRoot(${getDisplayName(WrappedComponent)})`;
  return WithRoot;
}
