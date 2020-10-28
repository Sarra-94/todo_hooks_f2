import React from "react";
import Item from "../Item/Item";
function TodoList({ list, deleteItem, handleChange }) {
  return (
    <div>
      {list.map((el) => (
        <Item
          key={el.id}
          item={el}
          deleteItem={deleteItem}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default TodoList;
