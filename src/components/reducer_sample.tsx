import React, { useReducer } from "react";

type Color = "red" | "orange" | "yellow";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT": {
      return {
        ...state,
        count: action.count,
      };
    }
    case "SET_TEXT": {
      return {
        ...state,
        text: action.text,
      };
    }
    case "SET_COLOR": {
      return {
        ...state,
        color: action.color,
      };
    }
    case "TOGGLE_GOOD": {
      return {
        ...state,
        isGood: !state.isGood,
      };
    }

    default:
      throw new Error("Unhandled action type");
  }
}

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: "hello world",
    color: "red",
    isGood: false,
  });

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
        <select value={state.count} onChange={onSelect}>
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
