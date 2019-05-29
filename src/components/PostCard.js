import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function PostCard({ post }) {
  const { excerpt, link, title } = post;
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: title }}
            variant="h5"
          />
          <Typography dangerouslySetInnerHTML={{ __html: excerpt }} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color="primary"
          component={Link}
          size="small"
          to={`/blog/${link.replace("https://wordpress.carpetelam.com/", "")}`}
        >
          Read More &raquo;
        </Button>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object
};

export default PostCard;
