import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function styles(theme) {
  return createStyles({
    footer: {
      margin: theme.spacing.unit * 2,
      textAlign: "left",
      width: "auto",
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing.unit * 4,
        textAlign: "right"
      }
    }
  });
}

function Footer({ classes, company }) {
  const { footer } = classes;
  return (
    <Typography className={footer} component="footer">
      © {new Date().getFullYear()}, {company}. Headless CMS powered by{" "}
      <Link
        href="https://wordpress.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        WordPress
      </Link>
      , Static HTML built with{" "}
      <Link
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </Link>
      .
    </Typography>
  );
}

Footer.propTypes = {
  classes: PropTypes.object,
  company: PropTypes.string.isRequired
};

export default withStyles(styles)(Footer);
