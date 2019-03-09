import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function styles() {
  return createStyles({
    honeypot: {
      display: "none"
    }
  });
}

function GatsbyContactForm({ classes, named = {} }) {
  const { honeypot } = classes;
  const { name } = named;
  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="phone"
      method="GET"
      name="contact-page-form"
      {...named}
    >
      <input type="hidden" name="form-name" value={name} />
      <Grid container spacing={16}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            id="contact-name"
            label="Name"
            name="name"
            placeholder="Princess Zelda"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            autoComplete="email"
            fullWidth
            id="contact-email"
            label="Email"
            name="email"
            placeholder="princess.zelda@hyrule.gov"
            type="email"
            required
            variant="outlined"
          />
        </Grid>
        <Grid className={honeypot} item xs={12}>
          <TextField
            fullWidth
            id="contact-phone"
            label="Phone"
            name="phone"
            placholder="404.555.1212"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="contact-message"
            label="Message"
            multiline
            name="message"
            placeholder="Open your eyes... Wake up, Link."
            required
            rows="4"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={3} xs={12}>
          <Button
            color="primary"
            fullWidth
            margin="normal"
            size="large"
            type="submit"
            variant="contained"
          >
            Send Email
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

GatsbyContactForm.propTypes = {
  children: PropTypes.string,
  classes: PropTypes.object,
  named: PropTypes.object
};

export default withStyles(styles)(GatsbyContactForm);
