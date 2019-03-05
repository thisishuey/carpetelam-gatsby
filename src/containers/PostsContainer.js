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
        const postCards = allWordpressPost.edges.map(({ node }) => {
          return <PostCard key={node.id} post={node} />;
        });
        return <InfiniteScroll cards={postCards} />;
      }}
    />
  );
}

PostsContainer.propTypes = {
  data: PropTypes.object.isRequired
};

export default PostsContainer;
