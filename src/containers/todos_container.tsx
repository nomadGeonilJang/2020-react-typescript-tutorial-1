import React, { useRef } from "react";
import Todos from "components/todos";
import { RootState } from "modules";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "modules/todos";
import styled from "styled-components";

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
    <Container>
      <form onSubmit={handleSubmit}>
        <input className={"todo-input"} ref={todoInputRef} type="text" />
      </form>
      <div className={"container"}>
        <Todos
          todos={todos}
          onRemoveTodo={onRemoveTodo}
          onToggleTodo={onToggleTodo}
        />
      </div>
    </Container>
  );
}

const Container = styled.section`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  width: 80%;
  height: 500px;
  background-color: hotpink;
  margin: 0 auto;
  overflow: hidden;

  position: relative;

  input[type="text"].todo-input {
    margin: 0 auto;
    width: 100%;
    height: 48px;
    font-size: 32px;
    padding: 0;
    padding-left: 12px;
    outline: none;
  }

  .container {
    padding: 0 12px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: auto;
    padding-bottom: 63px;
  }

  ul {
    padding: 0;
  }
  li:first-child {
    margin-top: 15px;
  }
  li {
    margin-bottom: 15px;
  }

  h2 span {
    display: block;
    background-color: tomato;
    height: 28px;
    width: 28px;
    text-align: center;
    height: 28px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  p {
    padding: 15px;
    padding-top: 35px;
    white-space: wrap;
    word-break: break-all;
  }
  .todo-card {
    border-radius: 5px;
    position: relative;
  }
  button {
    width: 28px;
    height: 28px;
  }
  .delete-button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .done-button {
    position: absolute;
    right: 5px;
    top: 35px;
  }
`;
