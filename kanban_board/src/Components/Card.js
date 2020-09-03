import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const Styles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),

    margin: theme.spacing(1),
  },
}));
function Card({ card }) {
  const cls = Styles();
  return (
    <div>
      <Paper elevation={3} className={cls.card}>
        {card.title}
      </Paper>
    </div>
  );
}

export default Card;
