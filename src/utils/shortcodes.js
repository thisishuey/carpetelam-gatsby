import GatsbyContactForm from "../components/shortcodes/GatsbyContactForm";
import GatsbyInfiniteScroll from "../components/shortcodes/GatsbyInfiniteScroll";
import GatsbyListView from "../components/shortcodes/GatsbyListView";

export const shortcodesBrackets = {
  "gatsby-contact-form": {
    type: "react",
    component: GatsbyContactForm
  },
  "gatsby-infinite-scroll": {
    type: "react",
    component: GatsbyInfiniteScroll
  },
  "gatsby-list-view": {
    type: "react",
    component: GatsbyListView
  }
};

export const shortcodesSingleLine = {};

export const shortcodes = {
  ...shortcodesBrackets,
  ...shortcodesSingleLine
};
