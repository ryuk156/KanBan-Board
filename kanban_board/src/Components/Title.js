import React, { useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
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
function Title({ title }) {
  const [open, setOpen] = useState(false);
  const cls = Styles();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value={title}
            inputProps={{
              className: cls.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
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
