/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react";

import MuiLayout from "./src/utils/MuiLayout";

function wrapRootElement({ element }) {
  return <MuiLayout>{element}</MuiLayout>;
}

export { wrapRootElement };
