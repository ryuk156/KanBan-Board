import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputCard from "./InputCard";
const Styles = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },
  addcard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}));
function InputContainer({ listid, type }) {
  const [open, setopen] = useState(false);
  const cls = Styles();
  return (
    <div className={cls.root}>
      <Collapse in={open}>
        <InputCard setopen={setopen} listid={listid} type={type} />
      </Collapse>

      <Collapse in={!open}>
        <Paper
          className={cls.addcard}
          onClick={() => setopen(!open)}
          elevation={0}
        >
          <Typography>
            {type === "card" ? " + Add a Card" : "+ Add a List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

export default InputContainer;
