import { colors, createMuiTheme } from "@material-ui/core";
import "typeface-roboto";
import "typeface-roboto-slab";

const headingBase = {
  fontFamily: "Roboto Slab",
  fontWeight: "bold"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.blue[900]
    },
    secondary: {
      light: colors.grey[700],
      main: colors.grey[800],
      dark: colors.grey[900]
    },
    type: "light"
  },
  typography: {
    h1: { ...headingBase },
    h2: { ...headingBase },
    h3: { ...headingBase },
    h4: { ...headingBase },
    h5: { ...headingBase },
    h6: { ...headingBase }
  }
});

export default theme;
