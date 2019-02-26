import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

function styles(theme) {
  return createStyles({
    parallax: {
      alignItems: "center",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      color: "white",
      display: "flex",
      height: "65vh",
      justifyContent: "center",
      maxHeight: "650px",
      minHeight: "65vh",
      position: "relative",
      textAlign: "center",
      zIndex: -2,
      "&:before": {
        background: "rgba(34, 34, 34, 0.75)"
      },
      "&:after": {
        background: "rgba(34, 34, 34, 0.75)"
      },
      "&:after, &:before": {
        content: "''",
        display: "block",
        height: "100%",
        left: 0,
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

function Parallax({ children, classes, image }) {
  const { parallax } = classes;
  const parallaxRef = createRef();
  const transform = useScroll();
  return (
    <div
      className={parallax}
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${image})`,
        transform
      }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Parallax);
