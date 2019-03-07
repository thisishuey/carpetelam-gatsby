import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

function ProjectsContainer({ items }) {
  return (
    <List>
      <Divider />
      {items.map(({ content, id, title }) => {
        return (
          <Fragment key={id}>
            <ListItem alignItems="flex-start">
              <ListItemText>
                <Typography
                  dangerouslySetInnerHTML={{ __html: title }}
                  variant="h5"
                />
                <Typography
                  dangerouslySetInnerHTML={{ __html: content }}
                  variant="subtitle1"
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

ProjectsContainer.propTypes = {
  props: PropTypes.object
};

export default ProjectsContainer;
