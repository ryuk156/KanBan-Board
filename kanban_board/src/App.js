import React, { useState } from "react";
import List from "./Components/List.js";
import "./App.css";
import { v4 as uuid } from "uuid";
import store from "./utils/store.js";
import storeApi from "./utils/storeApi.js";
import InputContainer from "./Components/InputContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";

const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    overflowY: "auto",
  },
}));

function App() {
  const cls = Styles();
  const [data, setdata] = useState(store);
  const addmorecard = (title, listid) => {
    const newcardid = uuid();
    const newcard = {
      id: newcardid,
      title,
    };

    const list = data.lists[listid];
    list.cards = [...list.cards, newcard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listid]: list,
      },
    };
    setdata(newState);
  };

  const addmorelist = (title) => {
    const newlistid = uuid();
    const newlist = {
      id: newlistid,
      title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newlistid],
      lists: {
        ...data.lists,
        [newlistid]: newlist,
      },
    };
    setdata(newState);
  };

  const updateListTitle = (title, listid) => {
    const list = data.lists[listid];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listid]: list,
      },
    };
    setdata(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setdata(newState);
    }
  };
  return (
    <storeApi.Provider value={{ addmorecard, addmorelist, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={cls.root}>
          {data.listIds.map((listid) => {
            const list = data.lists[listid];
            return <List list={list} key={listid} />;
          })}

          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </storeApi.Provider>
  );
}

export default App;
