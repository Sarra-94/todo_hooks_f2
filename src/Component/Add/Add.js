import React, { useState } from "react";

function Add({ handleItem }) {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button
        onClick={() => {
          handleItem(todo);
          setTodo("");
        }}
      >
        add
      </button>
    </div>
  );
}

export default Add;
