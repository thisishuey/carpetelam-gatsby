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
      <Link
        className="iubenda-nostyle no-brand iubenda-embed"
        href="https://www.iubenda.com/privacy-policy/84963270"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </Link>
      {" | "}
      <Link
        className="iubenda-nostyle no-brand iubenda-embed"
        href="https://www.iubenda.com/privacy-policy/84963270/cookie-policy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cookie Policy
      </Link>{" "}
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
