import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    color: theme.palette.text,
    margin: theme.spacing(2),
    textAlign: "left",
    width: "auto",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4),
      textAlign: "right"
    }
  }
}));

function Footer({ company }) {
  const { footer } = useStyles();
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
  company: PropTypes.string.isRequired
};

export default Footer;
