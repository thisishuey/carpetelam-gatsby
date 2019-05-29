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
              nodes {
                excerpt
                id
                link
                title
              }
            }
          }
        }
      `}
      render={({ wpgraphql: { posts } }) => {
        const postCards = posts.nodes.map(node => (
          <PostCard key={node.id} post={node} />
        ));
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
