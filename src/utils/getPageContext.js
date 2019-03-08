import { SheetsRegistry } from "jss";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

const headingBase = {
  fontFamily: "Roboto Slab",
  fontWeight: "bold"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[900]
    },
    secondary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900]
    },
    type: "light"
  },
  typography: {
    h1: { ...headingBase },
    h2: { ...headingBase },
    h3: { ...headingBase },
    h4: { ...headingBase },
    h5: { ...headingBase },
    h6: { ...headingBase },
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
