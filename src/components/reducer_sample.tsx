import React from "react";
import { Color, useSampleDispatch, useSampleState } from "./sample_context";

function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const onIncrease = (count: number) => () => {
    dispatch({ type: "SET_COUNT", count: count + 1 });
  };
  const onDecrease = (count: number) => () => {
    dispatch({ type: "SET_COUNT", count: count - 1 });
  };
  const onSetText = (text: string) => () => {
    dispatch({ type: "SET_TEXT", text });
  };
  const onToggle = () => {
    dispatch({ type: "TOGGLE_GOOD" });
  };
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_COLOR", color: e.target.value as Color });
  };

  return (
    <div
      style={{
        backgroundColor: `${state.isGood ? "green" : "gray"}`,
        color: state.color,
      }}
    >
      <p>{JSON.stringify(state)}</p>
      <div>
        <button onClick={onIncrease(state.count)}>+</button>
        <button onClick={onDecrease(state.count)}>-</button>
      </div>
      <div>
        <p style={{ backgroundColor: "white" }}>{state.text}</p>
        <button onClick={onSetText(state.count.toString())}>set</button>
      </div>
      <div>
        <select value={state.color} onChange={onSelect}>
          <option value={"red"}>{"red"}</option>
          <option value={"orange"}>{"orange"}</option>
          <option value={"yellow"}>{"yellow"}</option>
        </select>
      </div>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
}

export default ReducerSample;
