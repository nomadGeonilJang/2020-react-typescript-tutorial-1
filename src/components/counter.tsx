import React, { useState, useReducer } from "react";

type Action = { type: "INCREASE" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  if (action.type === "INCREASE") {
    return state + 1;
  }
  if (action.type === "DECREASE") {
    if (state) {
      return state - 1;
    }
    return 0;
  }
  throw new Error("Unhandled action type");
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
