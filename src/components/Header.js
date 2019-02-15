import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpApiMenusMenusItems(filter: { slug: { eq: "primary" } }) {
      edges {
        node {
          items {
            object_id
            order
            title
            url
          }
        }
      }
    }
  }
`;

function styles(theme) {
  return createStyles({
    brand: {
      flexGrow: 1,
      textDecoration: "none"
    }
  });
}

function Header({ classes, items }) {
  function TitleLink(props) {
    return <Link to="/" {...props} />;
  }
  return (
    <StaticQuery
      query={query}
      render={({ allWordpressWpApiMenusMenusItems, site }) => {
        const { title } = site.siteMetadata;
        const { items } = allWordpressWpApiMenusMenusItems.edges[0].node;
        return (
          <AppBar position="sticky">
            <Toolbar>
              <Typography
                className={classes.brand}
                color="inherit"
                component={TitleLink}
                variant="h6"
              >
                {title}
              </Typography>
              <nav>
                {items.map(({ object_id: key, title, url }) => {
                  const ButtonComponent = props => <Link to={url} {...props} />;
                  return (
                    <Button
                      className={classes.navButton}
                      color="inherit"
                      component={ButtonComponent}
                      key={key}
                    >
                      {title}
                    </Button>
                  );
                })}
              </nav>
            </Toolbar>
          </AppBar>
        );
      }}
    />
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
