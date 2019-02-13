import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function styles(theme) {
  return createStyles({
    brand: {
      flexGrow: 1,
      textDecoration: "none"
    }
  });
}

function Header({ classes, siteTitle }) {
  function TitleLink(props) {
    return <Link to="/" {...props} />;
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography
          className={classes.brand}
          color="inherit"
          component={TitleLink}
          variant="h6"
        >
          {siteTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default withStyles(styles)(Header);
