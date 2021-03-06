import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby-theme-material-ui";

function LinkList({ items }) {
  return (
    <List>
      <Divider />
      {items.map(({ content, id, link, title }) => {
        return (
          <Fragment key={id}>
            <ListItem
              alignItems="flex-start"
              button
              component={Link}
              to={link.replace("https://wordpress.carpetelam.com", "")}
            >
              <ListItemText>
                <Typography
                  dangerouslySetInnerHTML={{ __html: title }}
                  variant="h5"
                />
                <Typography
                  component="div"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </ListItemText>
            </ListItem>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
}

LinkList.propTypes = {
  items: PropTypes.array
};

export default LinkList;
