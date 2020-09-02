import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title.js";
const Styles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#E7ECEE",
    marginLeft: theme.spacing(2),
  },
}));
function List() {
  const cls = Styles();
  return (
    <div>
      <Paper className={cls.root} elevation={3}>
        <Title />
      </Paper>
    </div>
  );
}

export default List;
