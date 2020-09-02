import React from "react";
import {
  InputBase,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnadd: {
    color: "#fff",
    background: "#1B7AEE",
    "&:hover": {
      background: fade("#0A4185", 0.5),
    },
  },
  addcardbtn: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));
function InputCard({ setopen }) {
  const cls = Styles();
  return (
    <div>
      <div>
        <Paper className={cls.card}>
          <InputBase
            multiline
            onBlur={() => setopen(false)}
            fullWidth
            inputProps={{
              className: cls.input,
            }}
            placeholder="Enter Content"
          />
        </Paper>
      </div>
      <div className={cls.addcardbtn}>
        <Button className={cls.btnadd} onClick={() => setopen(false)}>
          Add Card
        </Button>
        <IconButton>
          <ClearIcon onClick={() => setopen(false)} />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;