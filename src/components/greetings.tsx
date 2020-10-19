import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  onClick: (name: string) => void;
  //   children?: React.ReactNode;
};

function Greetings({ name, mark, onClick }: GreetingsProps) {
  function handleClick() {
    onClick(name);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {name}, {mark}
      <button onClick={handleClick}>"Click" {mark}</button>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "Geonil",
};

export default Greetings;
