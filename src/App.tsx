import React from "react";
import Greetings from "./components/greetings";
import Counter from "./components/counter";
import MyForm from "./components/myform";

function App() {
  function onClick(name: string) {
    console.log(name);
  }

  function onSubmit(form: { name: string; description: string }) {
    console.log(form);
  }
  return (
    <>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </>
  );
}

export default App;
