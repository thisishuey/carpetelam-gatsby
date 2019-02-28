import NetlifyForm from "../components/NetlifyForm";

export const shortcodesBrackets = {
  "netlify-form": {
    type: "react",
    component: NetlifyForm
  }
};

export const shortcodesSingleLine = {};

export const shortcodes = {
  ...shortcodesBrackets,
  ...shortcodesSingleLine
};
