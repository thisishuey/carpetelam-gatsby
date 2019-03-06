import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

function styles(theme) {
  return createStyles({
    centerContent: {
      width: "auto",
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing.unit * 12,
        marginRight: theme.spacing.unit * 12
      }
    },
    logo: {
      flexGrow: 1,
      textDecoration: "none"
    },
    menuList: {
      width: 250
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    }
  });
}

function Header({ brand, classes, links, tagline }) {
  const [open, setOpen] = useState(false);
  const {
    centerContent,
    logo,
    menuList,
    sectionDesktop,
    sectionMobile
  } = classes;
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar className={centerContent}>
        <Typography
          className={logo}
          color="inherit"
          component={Link}
          to="/"
          variant="h6"
        >
          {brand}
          <Hidden xsDown> &ndash; {tagline}</Hidden>
        </Typography>
        <div className={sectionDesktop}>
          {links.map(({ object_id: key, title, url }) => {
            return (
              <Button color="inherit" component={Link} key={key} to={url}>
                {title}
              </Button>
            );
          })}
        </div>
        <div className={sectionMobile}>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" onClose={() => setOpen(false)} open={open}>
            <div
              tabIndex={0}
              onClick={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
              role="button"
            >
              <List className={menuList}>
                {links.map(({ object_id: key, title, url }) => {
                  return (
                    <li key={key}>
                      <ListItem button component={Link} to={url}>
                        <ListItemText primary={title} />
                      </ListItem>
                    </li>
                  );
                })}
              </List>
            </div>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  brand: PropTypes.string,
  classes: PropTypes.object,
  links: PropTypes.array,
  tagline: PropTypes.string
};

Header.defaultProps = {
  brand: "",
  links: []
};

export default withStyles(styles)(Header);
