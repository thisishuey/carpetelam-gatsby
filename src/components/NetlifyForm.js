import React from "react";
import PropTypes from "prop-types";

function NetlifyForm(props) {
  return <form {...props.named}>{props.children}</form>;
}

NetlifyForm.propTypes = {
  children: PropTypes.string
};

export default NetlifyForm;
