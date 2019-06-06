import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "./Link";

const useStyles = makeStyles(theme => ({
  appBar: {
    opacity: "0.75"
  },
  centerContent: {
    width: "auto",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(12),
      marginRight: theme.spacing(12)
    }
  },
  logo: {
    flexGrow: 1,
    textDecoration: "none"
  },
  logoLink: {
    color: "inherit"
  },
  menuList: {
    width: 250
  },
  navLink: {
    "&.active": {
      background: theme.palette.secondary.light,
      [theme.breakpoints.up("md")]: {
        background: theme.palette.secondary.dark
      }
    }
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
}));

function Header({ brand, links, tagline }) {
  const [open, setOpen] = useState(false);
  const {
    appBar,
    centerContent,
    logo,
    logoLink,
    menuList,
    navLink,
    sectionDesktop,
    sectionMobile
  } = useStyles();
  return (
    <AppBar className={appBar} color="secondary" position="sticky">
      <Toolbar className={centerContent}>
        <Typography className={logo} color="inherit" variant="h6">
          <Link className={logoLink} to="/">
            {brand}
            <Hidden xsDown> &ndash; {tagline}</Hidden>
          </Link>
        </Typography>
        <div className={sectionDesktop}>
          {links.map(({ id, title, url }) => {
            const NavLink = props => (
              <Link
                {...props}
                getProps={({ href, isCurrent, isPartiallyCurrent }) => ({
                  className: classNames(props.className, {
                    active: isCurrent || (href !== "/" && isPartiallyCurrent)
                  })
                })}
                to={`/${url.replace("https://wordpress.carpetelam.com/", "")}`}
              />
            );
            return (
              <Button
                className={navLink}
                color="inherit"
                component={NavLink}
                key={id}
              >
                {title}
              </Button>
            );
          })}
        </div>
        <div className={sectionMobile}>
          <IconButton color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            color="primary"
            onClose={() => setOpen(false)}
            open={open}
          >
            <Button
              tabIndex={0}
              onClick={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
            >
              <List className={menuList}>
                {links.map(({ id, title, url }) => {
                  const NavLink = props => (
                    <Link
                      {...props}
                      getProps={({ href, isCurrent, isPartiallyCurrent }) => ({
                        className: classNames(props.className, {
                          active:
                            isCurrent || (href !== "/" && isPartiallyCurrent)
                        })
                      })}
                      to={`/${url.replace(
                        "https://wordpress.carpetelam.com/",
                        ""
                      )}`}
                    />
                  );
                  return (
                    <li key={id}>
                      <ListItem button className={navLink} component={NavLink}>
                        <ListItemText primary={title} />
                      </ListItem>
                      <Divider />
                    </li>
                  );
                })}
              </List>
            </Button>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  brand: PropTypes.string,
  //eslint-disable-next-line react/no-unused-prop-types
  className: PropTypes.object,
  links: PropTypes.array,
  tagline: PropTypes.string
};

Header.defaultProps = {
  brand: "",
  links: []
};

export default Header;
