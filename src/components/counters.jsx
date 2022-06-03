import React from "react";
import Counter from "./counter";

export default function Counters({
  onReset,
  onIncrement,
  onDecrement,
  onDelete,
  counters,
}) {
  return (
    <>
      <button onClick={onReset} className='btn btn-primary btn-sm m-2'>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={counter}
        />
      ))}
    </>
  );
}
