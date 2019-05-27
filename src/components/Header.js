import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import classNames from "classnames";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
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
  });
}

function Header({ brand, classes, links, tagline }) {
  const [open, setOpen] = useState(false);
  const {
    centerContent,
    logo,
    menuList,
    navLink,
    sectionDesktop,
    sectionMobile
  } = classes;
  const BrandLink = props => <Link {...props} to="/" />;
  return (
    <AppBar color="secondary" position="sticky">
      <Toolbar className={centerContent}>
        <Typography
          className={logo}
          color="inherit"
          component={BrandLink}
          variant="h6"
        >
          {brand}
          <Hidden xsDown> &ndash; {tagline}</Hidden>
        </Typography>
        <nav className={sectionDesktop}>
          {links.map(({ id, title, url }) => {
            const NavLink = props => (
              <Link
                {...props}
                getProps={({ href, isCurrent, isPartiallyCurrent }) => ({
                  className: classNames(props.className, {
                    active: isCurrent || (href !== "/" && isPartiallyCurrent)
                  })
                })}
                to={url.replace("https://wordpress.carpetelam.com/", "/")}
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
        </nav>
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
            <button
              tabIndex={0}
              onClick={() => setOpen(false)}
              onKeyDown={() => setOpen(false)}
            >
              <List className={menuList}>
                {links.map(({ object_id: key, title, url }) => {
                  const NavLink = props => (
                    <Link
                      {...props}
                      getProps={({ href, isCurrent, isPartiallyCurrent }) => ({
                        className: classNames(props.className, {
                          active:
                            isCurrent || (href !== "/" && isPartiallyCurrent)
                        })
                      })}
                      to={url}
                    />
                  );
                  return (
                    <li key={key}>
                      <ListItem button className={navLink} component={NavLink}>
                        <ListItemText primary={title} />
                      </ListItem>
                      <Divider />
                    </li>
                  );
                })}
              </List>
            </button>
          </Drawer>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  brand: PropTypes.string,
  classes: PropTypes.object,
  //eslint-disable-next-line react/no-unused-prop-types
  className: PropTypes.object,
  links: PropTypes.array,
  tagline: PropTypes.string
};

Header.defaultProps = {
  brand: "",
  links: []
};

export default withStyles(styles)(Header);
