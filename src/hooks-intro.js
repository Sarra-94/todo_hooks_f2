import React, { useState, useEffect } from "react";

function Hook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ghayeth");
  const increment = () => {
    setCount((c) => c + 1);
  };
  useEffect(() => {
    console.log("componentMonted");
  }, [count, name]);
  return (
    <div className="App">
      <h1>workshop hooks</h1>
      <button onClick={increment}>+</button>
      <p>{count}</p>
      {/*<p onClick={() => setName("hedi")}>name:{name}</p>*/}
      <input onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
}

export default Hook;
