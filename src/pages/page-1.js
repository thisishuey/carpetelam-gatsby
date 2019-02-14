import React, { Fragment } from "react";

import Background from "../components/Background";
import Logo from "../components/Logo";
import SEO from "../components/SEO";

function IndexPage() {
  return (
    <Fragment>
      <SEO
        title="Home"
        keywords={[
          "carpe telam",
          "seize the web",
          "gatsby",
          "application",
          "react",
          "javascript",
          "graphql",
          "wordpress"
        ]}
      />
      <Background />
      <div style={{ textAlign: "center" }}>
        <div style={{ maxWidth: "300px", margin: "1.45rem auto" }}>
          <Logo />
        </div>
        <h1>After these messages...</h1>
        <h2>...we'll be right back!</h2>
      </div>
    </Fragment>
  );
}

export default IndexPage;
