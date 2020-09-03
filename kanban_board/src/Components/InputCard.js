import React, { useState, useContext } from "react";
import {
  InputBase,
  Typography,
  Button,
  IconButton,
  Paper,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, fade } from "@material-ui/core/styles";

import storeApi from "../utils/storeApi.js";

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

function InputCard({ setopen, listid, type }) {
  const [title, settitle] = useState("");
  const { addmorecard, addmorelist } = useContext(storeApi);
  const cls = Styles();

  const handleChange = (e) => {
    settitle(e.target.value);
  };

  const handleSubmit = () => {
    if (type === "card") {
      addmorecard(title, listid);
      settitle("");
      setopen(false);
    } else {
      addmorelist(title);
      settitle("");
      setopen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={cls.card}>
          <InputBase
            multiline
            onChange={handleChange}
            fullWidth
            inputProps={{
              className: cls.input,
            }}
            value={title}
            placeholder={type === "card" ? "Enter content" : "Enter title"}
          />
        </Paper>
      </div>
      <div className={cls.addcardbtn}>
        <Button className={cls.btnadd} onClick={handleSubmit}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton onClick={() => setopen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default InputCard;
