import ContactForm from "../components/ContactForm";
import PostsContainer from "../containers/PostsContainer";
import ProjectsContainer from "../containers/ProjectsContainer";
import ServicesContainer from "../containers/ServicesContainer";

export const shortcodesBrackets = {
  "gatsby-contact-form": {
    type: "react",
    component: ContactForm
  },
  "gatsby-posts": {
    type: "react",
    component: PostsContainer
  },
  "gatsby-projects": {
    type: "react",
    component: ProjectsContainer
  },
  "gatsby-services": {
    type: "react",
    component: ServicesContainer
  }
};

export const shortcodesSingleLine = {};

export const shortcodes = {
  ...shortcodesBrackets,
  ...shortcodesSingleLine
};
