import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
};

function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      {name}, {mark}
    </div>
  );
}

Greetings.defaultProps = {
  mark: "Geonil",
};

export default Greetings;
