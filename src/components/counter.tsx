import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount((pre) => pre + 1);
  const onDecrease = () => setCount((pre) => (pre > 0 ? pre - 1 : pre));
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
