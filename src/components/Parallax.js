import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";

function styles(theme) {
  return createStyles({
    pageSubtitleStyle: {
      ...theme.typography.subtitle1,
      color: "inherit"
    },
    pageTitleStyle: {
      ...theme.typography.h3,
      color: "inherit",
      fontFamily: "Roboto Slab",
      fontWeight: "bold"
    },
    parallax: {
      alignItems: "center",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      color: "white",
      display: "flex",
      height: "65vh",
      justifyContent: "center",
      padding: theme.spacing.unit * 2,
      maxHeight: "650px",
      minHeight: "65vh",
      position: "relative",
      textAlign: "center",
      zIndex: -2,
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing.unit * 4
      },
      "&:before": {
        background: theme.palette.secondary.dark,
        content: "''",
        display: "block",
        height: "100%",
        left: 0,
        opacity: 0.75,
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: -1
      }
    }
  });
}

function useScroll() {
  const [transform, setTransform] = useState(`translate3d(0, 0, 0)`);
  useEffect(() => {
    const resetTransform = () =>
      setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`);
    resetTransform();
    window.addEventListener("scroll", resetTransform);
    return () => window.removeEventListener("scroll", resetTransform);
  });
  return transform;
}

function Parallax({ backgroundImage, classes, pageSubtitle, pageTitle }) {
  const { header, pageSubtitleStyle, pageTitleStyle, parallax } = classes;
  const parallaxRef = createRef();
  const transform = useScroll();
  return (
    <div
      className={parallax}
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transform
      }}
    >
      <div className={header}>
        <Typography
          className={pageTitleStyle}
          component="h1"
          dangerouslySetInnerHTML={{ __html: pageTitle }}
        />
        <Typography
          className={pageSubtitleStyle}
          component="h2"
          dangerouslySetInnerHTML={{ __html: pageSubtitle }}
        />
      </div>
    </div>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Parallax);
