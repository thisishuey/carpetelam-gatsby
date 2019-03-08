module.exports = {
  linters: {
    "*.js": ["eslint"],
    "*.+(js|jsx|json|yaml|yml|css|scss|less|ts|tsx|md|mdx|graphql)": [
      "prettier --write",
      "git add"
    ]
  }
};
