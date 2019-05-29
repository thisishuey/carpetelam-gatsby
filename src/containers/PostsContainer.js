import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

import InfiniteScroll from "../components/InfiniteScroll";
import PostCard from "../components/PostCard";

function PostsContainer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          wpgraphql {
            posts {
              edges {
                node {
                  excerpt
                  id
                  link
                  title
                  featuredImage {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { posts } }) => {
        const postCards = posts.edges.map(({ node }) => {
          return <PostCard key={node.id} post={node} />;
        });
        return <InfiniteScroll cards={postCards} />;
      }}
    />
  );
}

PostsContainer.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      posts: PropTypes.object
    })
  })
};

export default PostsContainer;
