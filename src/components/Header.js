import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
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

function Header({ classes, navItems, siteTitle }) {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          className={classes.brand}
          color="inherit"
          component={Link}
          to="/"
          variant="h6"
        >
          {siteTitle}
        </Typography>
        {navItems.map(({ object_id: key, title, url }) => {
          return (
            <Button
              className={classes.navButton}
              color="inherit"
              component={Link}
              key={key}
              to={url}
            >
              {title}
            </Button>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object,
  navItems: PropTypes.array,
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ""
};

export default withStyles(styles)(Header);
