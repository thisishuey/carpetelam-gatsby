import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";

function PolicyLink({ link, title }) {
  useEffect(() =>
    ((w, d) => {
      const loader = () => {
        const s = d.createElement("script");
        const tag = d.getElementsByTagName("script")[0];
        s.src = "https://cdn.iubenda.com/iubenda.js";
        tag.parentNode.insertBefore(s, tag);
      };
      if (w.addEventListener) {
        w.addEventListener("load", loader, false);
      } else if (w.attachEvent) {
        w.attachEvent("onload", loader);
      } else {
        w.onload = loader;
      }
    })(window, document)
  );
  return (
    <Fragment>
      <Link
        className="iubenda-nostyle no-brand iubenda-embed"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </Link>
    </Fragment>
  );
}

PolicyLink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PolicyLink;
