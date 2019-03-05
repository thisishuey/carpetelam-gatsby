import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
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

function PostsContainer({ classes, named }) {
  const { cardActions, cardMedia } = classes;
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPost {
            edges {
              node {
                excerpt
                featuredMedia: featured_media {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                id
                link
                title
              }
            }
          }
        }
      `}
      render={({ allWordpressPost }) => {
        const posts = allWordpressPost.edges.map(
          ({ node: { excerpt, featuredMedia, id, link, title } }) => {
            return (
              <Card key={id}>
                <CardActionArea>
                  <CardMedia
                    className={cardMedia}
                    image={
                      featuredMedia &&
                      featuredMedia.localFile.childImageSharp.fluid.src
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
        );
        return (
          <Grid container {...named} spacing={16}>
            {posts.map(post => {
              return (
                <Grid item key={post.key} sm={4} xs={12}>
                  {post}
                </Grid>
              );
            })}
          </Grid>
        );
      }}
    />
  );
}
PostsContainer.propTypes = {
  classes: PropTypes.object,
  named: PropTypes.object
};

export default withStyles(styles)(PostsContainer);
