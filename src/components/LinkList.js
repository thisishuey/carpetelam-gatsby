import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import ListItemLink from "./ListItemLink";

function LinkList({ items }) {
  return (
    <List>
      <Divider />
      {items.map(({ content, id, link, title }) => {
        return (
          <Fragment key={id}>
            <ListItemLink
              alignItems="flex-start"
              to={link.replace("https://wordpress.carpetelam.com", "/")}
            >
              <ListItemText>
                <Typography
                  dangerouslySetInnerHTML={{ __html: title }}
                  variant="h5"
                />
                <Typography dangerouslySetInnerHTML={{ __html: content }} />
              </ListItemText>
            </ListItemLink>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
}

LinkList.propTypes = {
  items: PropTypes.object
};

export default LinkList;
