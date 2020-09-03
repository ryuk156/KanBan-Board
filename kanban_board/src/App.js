import React, { useState } from "react";
import List from "./Components/List.js";
import "./App.css";
import { v4 as uuid } from "uuid";
import store from "./utils/store.js";
import storeApi from "./utils/storeApi.js";

function App() {
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
  return (
    <storeApi.Provider value={{ addmorecard }}>
      <div>
        {data.listIds.map((listid) => {
          const list = data.lists[listid];
          return <List list={list} key={listid} />;
        })}
      </div>
    </storeApi.Provider>
  );
}

export default App;
