import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title.js";
import Card from "./Card.js";
import InputContainer from "./InputContainer.js";
import { Droppable, Draggable } from "react-beautiful-dnd";

const Styles = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#E7ECEE",
    marginLeft: theme.spacing(2),
  },
  cardcontainer: {
    marginTop: theme.spacing(3),
  },
}));
function List({ list, index }) {
  const cls = Styles();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper
            className={cls.root}
            elevation={3}
            {...provided.dragHandleProps}
          >
            <Title title={list.title} listid={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={cls.cardcontainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <InputContainer listid={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

export default List;
