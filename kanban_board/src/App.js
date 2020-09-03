import React, { useState } from "react";
import List from "./Components/List.js";
import "./App.css";
import { v4 as uuid } from "uuid";
import store from "./utils/store.js";
import storeApi from "./utils/storeApi.js";
import InputContainer from "./Components/InputContainer.js";
import { makeStyles } from "@material-ui/core/styles";
const Styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
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
  return (
    <storeApi.Provider value={{ addmorecard, addmorelist, updateListTitle }}>
      <div className={cls.root}>
        {data.listIds.map((listid) => {
          const list = data.lists[listid];
          return <List list={list} key={listid} />;
        })}

        <InputContainer type="list" />
      </div>
    </storeApi.Provider>
  );
}

export default App;
