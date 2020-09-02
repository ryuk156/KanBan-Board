import React, { useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
const Styles = makeStyles((theme) => ({
  editableTitle: {
    flexGrow: 1,
  },
  editableContainer: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));
function Title() {
  const [open, setOpen] = useState(false);
  const cls = Styles();
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value="Todo"
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
            Todo{" "}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}

export default Title;
