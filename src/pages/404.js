import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/Layout";
import Parallax from "../components/Parallax";
import SEO from "../components/SEO";
import withRoot from "../utils/withRoot";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Parallax pageSubtitle="Not Found" pageTitle="404" />
    <Typography component={Paper} variant="body1">
      You just hit a route that doesn't exist... the sadness.
    </Typography>
  </Layout>
);

export default withRoot(NotFoundPage);
