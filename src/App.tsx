import React from "react";
import Greetings from "./components/greetings";

function App() {
  function onClick(name: string) {
    console.log(name);
  }
  return <Greetings name="Hello" onClick={onClick} />;
}

export default App;
