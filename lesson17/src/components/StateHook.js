import React from "react";
import { useState } from "react";

const StateHook = () => {
  const [numberSet, countUpDown] = useState(0);

  const up = () => {
    countUpDown(numberSet + 1);
  };
  const down = () => {
    countUpDown(numberSet - 1);
  };

  return (
    <div>
      <h1>The value is: {numberSet}</h1>
      <button onClick={() => up()}>CountUp</button>
      <button onClick={() => down()}>CountUp</button>
    </div>
  );
};
export default StateHook;
