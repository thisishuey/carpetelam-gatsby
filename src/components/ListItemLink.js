import React from "react";
import { ListItem } from "@material-ui/core";
import { Link } from "gatsby";

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

export default ListItemLink;
