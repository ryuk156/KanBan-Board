import React, { useState, useContext } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import store from "../utils/store.js";
import storeApi from "../utils/storeApi.js";
const Styles = makeStyles((theme) => ({
  editableContainer: {
    marginLeft: theme.spacing(1),
    display: "flex",
    marginTop: theme.spacing(1),
  },

  editableTitle: {
    flexGrow: 1,
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));
function Title({ title, listid }) {
  const [open, setOpen] = useState(false);
  const [newtitle, setnewtitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const cls = Styles();
  const handlechange = (e) => {
    setnewtitle(e.target.value);
  };

  const handleblur = () => {
    updateListTitle(newtitle, listid);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            onChange={handlechange}
            value={newtitle}
            inputProps={{
              className: cls.input,
            }}
            fullWidth
            onBlur={handleblur}
          />
        </div>
      ) : (
        <div className={cls.editableContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={cls.editableTitle}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}

export default Title;
