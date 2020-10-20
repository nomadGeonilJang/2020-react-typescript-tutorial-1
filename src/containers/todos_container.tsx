import React, { useRef } from "react";
import Todos from "components/todos";
import { RootState } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "modules/todos";

export default function TodosContainer() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const todoInputRef = useRef<HTMLInputElement>(null);

  const onAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };
  const onRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  const onToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoInputRef.current) {
      const text = todoInputRef.current.value;
      onAddTodo(text);
      todoInputRef.current.value = "";
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={todoInputRef} name={"todo_input"} type="text" />
      </form>
      <Todos
        todos={todos}
        onRemoveTodo={onRemoveTodo}
        onToggleTodo={onToggleTodo}
      />
    </>
  );
}
