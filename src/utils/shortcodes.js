import GatsbyContactForm from "../components/shortcodes/GatsbyContactForm";
import GatsbyInfiniteScroll from "../components/shortcodes/GatsbyInfiniteScroll";

export const shortcodesBrackets = {
  "gatsby-contact-form": {
    type: "react",
    component: GatsbyContactForm
  },
  "gatsby-infinite-scroll": {
    type: "react",
    component: GatsbyInfiniteScroll
  }
};

export const shortcodesSingleLine = {};

export const shortcodes = {
  ...shortcodesBrackets,
  ...shortcodesSingleLine
};
