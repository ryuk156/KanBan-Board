import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
const Styles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),

    margin: theme.spacing(1),
  },
}));
function Card({ card, index }) {
  const cls = Styles();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper elevation={3} className={cls.card}>
            {card.title}
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
