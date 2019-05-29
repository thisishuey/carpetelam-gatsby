import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

function InfiniteScroll({ cards }) {
  return (
    <Grid container spacing={2}>
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
  cards: PropTypes.array
};

export default InfiniteScroll;
