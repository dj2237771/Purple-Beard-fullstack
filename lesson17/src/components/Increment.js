import React from "react";
import { useState } from "react";

const Increment = () => {
  const [numberSet, countUpDown] = useState(0);

  const up = () => {
    if (numberSet === 3) {
      countUpDown(0);
    } else {
      countUpDown(numberSet + 1);
    }
  };
  const down = () => {
    if (numberSet === -3) {
      countUpDown(0);
    } else {
      countUpDown(numberSet - 1);
    }
  };

  return (
    <div>
      <h1>The value is: {numberSet}</h1>
      <button onClick={() => up()}>CountUp</button>
      <button onClick={() => down()}>countUpDown</button>
    </div>
  );
};
export default Increment;
