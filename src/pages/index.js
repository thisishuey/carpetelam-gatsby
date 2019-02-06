import React from "react";

import Background from "../components/background";
import Logo from "../components/logo";
import MaintenanceLayout from "../components/maintenance-layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <MaintenanceLayout>
    <SEO
      title="Home"
      keywords={[
        "carpe telam",
        "seize the web",
        "gatsby",
        "application",
        "react",
        "javascript",
        "graphql"
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
  </MaintenanceLayout>
);

export default IndexPage;
