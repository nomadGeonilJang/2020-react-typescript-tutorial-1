import React from "react";
import Greetings from "./components/greetings";
import Counter from "./components/counter";
import MyForm from "./components/myform";
import ReducerSample from "./components/reducer_sample";
import SampleProvider from "./components/sample_context";

function App() {
  function onClick(name: string) {
    console.log(name);
  }

  function onSubmit(form: { name: string; description: string }) {
    console.log(form);
  }
  return (
    <SampleProvider>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <ReducerSample />
    </SampleProvider>
  );
}

export default App;
