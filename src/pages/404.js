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
      The page you're trying to access does not exist, please check the address
      or use the navigation at the top of the page to access the rest of the
      site.
    </Typography>
  </Layout>
);

export default withRoot(NotFoundPage);
