import React, { useState } from "react";
import List from "./Components/List.js";
import "./App.css";

import store from "./utils/store.js";

function App() {
  const [data, setdata] = useState(store);
  return (
    <div className="App">
      {data.listIds.map((listid) => {
        const list = data.lists[listid];
        return <List list={list} key={listid} />;
      })}
    </div>
  );
}

export default App;
