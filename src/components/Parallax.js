import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  parallax: {
    alignItems: "center",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    color: "white",
    display: "flex",
    height: "65vh",
    justifyContent: "center",
    padding: theme.spacing(2),
    maxHeight: "650px",
    minHeight: "65vh",
    position: "relative",
    textAlign: "center",
    zIndex: -2,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4)
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
}));

function useScroll() {
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");
  useEffect(() => {
    const resetTransform = () =>
      setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`);
    resetTransform();
    window.addEventListener("scroll", resetTransform);
    return () => window.removeEventListener("scroll", resetTransform);
  });
  return transform;
}

function Parallax({ backgroundImageSrc, pageSubtitle, pageTitle }) {
  const { parallax } = useStyles();
  const parallaxRef = createRef();
  const transform = useScroll();
  return (
    <div
      className={parallax}
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${backgroundImageSrc})`,
        transform
      }}
    >
      <div>
        <Typography
          color="inherit"
          dangerouslySetInnerHTML={{ __html: pageTitle }}
          variant="h3"
        />
        <Typography
          color="inherit"
          dangerouslySetInnerHTML={{ __html: pageSubtitle }}
          variant="subtitle1"
        />
      </div>
    </div>
  );
}

Parallax.propTypes = {
  backgroundImageSrc: PropTypes.string,
  pageSubtitle: PropTypes.string,
  pageTitle: PropTypes.string
};

export default Parallax;
