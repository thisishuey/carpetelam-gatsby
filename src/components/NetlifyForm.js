import React from "react";
import PropTypes from "prop-types";

function NetlifyForm({ children = [] }) {
  return <form>{children}</form>;
}

NetlifyForm.propTypes = {
  children: PropTypes.object
};

export default NetlifyForm;
