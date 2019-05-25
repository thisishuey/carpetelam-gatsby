import React from "react";
import PropTypes from "prop-types";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

function styles() {
  return createStyles({});
}

function InfiniteScroll({ cards }) {
  return (
    <Grid container spacing={16}>
      {cards.map(card => {
        return (
          <Grid item key={card.key} sm={4} xs={12}>
            {card}
          </Grid>
        );
      })}
    </Grid>
  );
}

InfiniteScroll.propTypes = {
  cards: PropTypes.object
};

export default withStyles(styles)(InfiniteScroll);
