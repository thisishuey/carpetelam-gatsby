import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function styles(theme) {
  return createStyles({
    cardActions: {},
    cardMedia: {
      backgroundColor: theme.palette.secondary.light,
      height: 140
    }
  });
}

function PostCard({ classes, post }) {
  const { cardActions, cardMedia } = classes;
  const { excerpt, featuredMedia, link, title } = post;
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={cardMedia}
          image={
            featuredMedia && featuredMedia.localFile.childImageSharp.fluid.src
          }
          title={title}
        />
        <CardContent>
          <Typography
            component="h2"
            dangerouslySetInnerHTML={{ __html: title }}
            variant="h5"
          />
          <Typography
            component="div"
            dangerouslySetInnerHTML={{ __html: excerpt }}
            variant="body1"
          />
        </CardContent>
      </CardActionArea>
      <CardActions className={cardActions}>
        <Button
          color="primary"
          component={Link}
          size="small"
          to={`/blog${link}`}
        >
          Read More &raquo;
        </Button>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  classes: PropTypes.object,
  named: PropTypes.object
};

export default withStyles(styles)(PostCard);
