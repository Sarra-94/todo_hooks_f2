import React, { useState } from "react";
import "./App.css";
import { Items } from "./Constant/data";

// List of component
import TodoList from "./Component/TodoList/TodoList";
import Add from "./Component/Add/Add";
function App() {
  const [items, setItems] = useState(Items);

  // Function handleItem
  const handleItem = (item) => {
    if (item.trim() !== "")
      setItems([...items, { id: Math.random(), name: item, done: false }]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((el) => el.id !== id));
  };

  const handleChange = (id) => {
    setItems(
      items.map((el) => (el.id === id ? { ...el, done: !el.done } : el))
    );
  };
  return (
    <div style={{ margin: "10%" }}>
      <h1>TodoApp</h1>
      <Add handleItem={handleItem} />
      <TodoList
        handleChange={handleChange}
        deleteItem={deleteItem}
        list={items}
      />
    </div>
  );
}

export default App;
