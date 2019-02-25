import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ author, description, keywords, lang, meta, title }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
          wordpressSiteMetadata {
            name
            description
          }
        }
      `}
      render={({ site, wordpressSiteMetadata }) => {
        const metaAuthor = author || site.siteMetadata.author;
        const metaDescription =
          description ||
          wordpressSiteMetadata.description ||
          site.siteMetadata.description;
        const metaTitle = wordpressSiteMetadata.name || site.siteMetadata.title;
        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
              {
                name: "description",
                content: metaDescription
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: metaDescription
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                name: "twitter:card",
                content: "summary"
              },
              {
                name: "twitter:creator",
                content: metaAuthor
              },
              {
                name: "twitter:title",
                content: title
              },
              {
                name: "twitter:description",
                content: metaDescription
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords.join(", ")
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: []
};

SEO.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default SEO;
