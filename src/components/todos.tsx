import React from "react";
import { Todo } from "modules/todos";

type ItemProps = {
  todo: Todo;
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};

function Item({ todo, onRemoveTodo, onToggleTodo }: ItemProps) {
  const { id, text, done } = todo;
  return (
    <div
      style={{
        backgroundColor: `${done ? "green" : "gray"}`,
        color: "white",
        width: "200px",
        height: "300px",
        overflow: "auto",
      }}
    >
      <h2>{id}</h2>
      <p>{text}</p>
      <button
        onClick={() => {
          onRemoveTodo(id);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          onToggleTodo(id);
        }}
      >
        done
      </button>
    </div>
  );
}

type TodosProps = {
  todos: Todo[];
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
};
export default function Todos({
  todos,
  onRemoveTodo,
  onToggleTodo,
}: TodosProps) {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((item) => (
        <li key={item.id}>
          <Item
            todo={item}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </li>
      ))}
    </ul>
  );
}

Todos.defaultValue = {
  todos: [],
};
