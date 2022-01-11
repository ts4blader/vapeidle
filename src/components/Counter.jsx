import React from "react";

export default function Counter({ counter, setCounter }) {
  return (
    <div className="counter">
      <div
        className="counter__controller minus"
        onClick={() => {
          if (counter > 1) setCounter(counter - 1);
        }}
      >
        -
      </div>
      <div className="counter__value">{counter}</div>
      <div
        className="counter__controller add"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </div>
    </div>
  );
}
