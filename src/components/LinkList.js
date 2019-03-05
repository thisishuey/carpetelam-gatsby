import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

function ProjectsContainer({ items }) {
  return (
    <List>
      <Divider />
      {items.map(({ content, id, link, title }) => {
        return (
          <Fragment key={id}>
            <ListItem alignItems="flex-start" component={Link} to={link}>
              <ListItemText>
                <Typography
                  dangerouslySetInnerHTML={{ __html: title }}
                  variant="h5"
                />
                <Typography
                  dangerouslySetInnerHTML={{ __html: content }}
                  variant="body1"
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
