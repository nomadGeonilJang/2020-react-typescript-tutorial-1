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
      className={"todo-card"}
      style={{
        backgroundColor: `${done ? "green" : "gray"}`,
        color: "white",
      }}
    >
      <h2>
        <span>{id}</span>
      </h2>
      <p>{text}</p>
      <button
        className="delete-button"
        onClick={() => {
          onRemoveTodo(id);
        }}
      >
        ❌
      </button>
      <button
        className="done-button"
        onClick={() => {
          onToggleTodo(id);
        }}
      >
        🔥
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
