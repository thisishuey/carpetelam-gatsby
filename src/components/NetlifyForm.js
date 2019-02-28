import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function styles(theme) {
  return createStyles({
    honeypot: {
      display: "none"
    }
  });
}

function NetlifyForm({ classes, named }) {
  const { honeypot } = classes;
  return (
    <form {...named}>
      <Grid container spacing={16}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            name="full-name"
            placeholder="Princess Zelda"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            autoComplete="email"
            fullWidth
            label="Email"
            name="email"
            placeholder="princess.zelda@hyrule.gov"
            required
            type="email"
            variant="outlined"
          />
        </Grid>
        <Grid className={honeypot} item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            placholder="404.555.1212"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            multiline
            name="message"
            placeholder="Open your eyes... Wake up, Link."
            required
            rows="4"
            variant="outlined"
          />
        </Grid>
        <Grid container direction="row-reverse" item xs={12}>
          <Grid item sm={3} xs={12}>
            <Button
              color="primary"
              fullWidth
              margin="normal"
              size="large"
              variant="contained"
            >
              Send Email
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

NetlifyForm.propTypes = {
  children: PropTypes.string
};

export default withStyles(styles)(NetlifyForm);
