import { SheetsRegistry } from "jss";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[700],
      main: blue[800],
      dark: blue[900]
    },
    secondary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900]
    },
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }
  return global.__INIT_MATERIAL_UI__;
}

export default getPageContext;
