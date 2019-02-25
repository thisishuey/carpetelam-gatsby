import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";

function styles(theme) {
  return createStyles({
    parallax: {
      alignItems: "center",
      backgroundColor: "#222",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      color: "white",
      display: "flex",
      height: "65vh",
      justifyContent: "center",
      maxHeight: "1600px",
      position: "relative",
      textAlign: "center",
      zIndex: -1
    }
  });
}

function useScroll() {
  const [transform, setTransform] = useState(`translate3d(0, 0, 0)`);
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const resetTransform = () =>
        setTransform(`translate3d(0, ${window.pageYOffset / 3}px, 0)`);
      resetTransform();
      window.addEventListener("scroll", resetTransform);
      return () => window.removeEventListener("scroll", resetTransform);
    }
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
      style={{ backgroundImage: `url(${image})`, transform }}
    >
      {children}
    </div>
  );
}

Parallax.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Parallax);
