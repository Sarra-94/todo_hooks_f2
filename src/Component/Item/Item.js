import React from "react";
import "./Item.css";
function Item({ item, deleteItem, handleChange }) {
  return (
    <div className="item">
      <p className={item.done ? `done` : null}>{item.name}</p>
      <div>
        <button onClick={() => deleteItem(item.id)}>delete</button>
        <button onClick={() => handleChange(item.id)}>
          {item.done ? "todo" : "done"}
        </button>
      </div>
    </div>
  );
}

export default Item;
