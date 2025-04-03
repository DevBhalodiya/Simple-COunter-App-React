import { useState } from "react";
import "./App.css"; // Make sure this file is linked

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="button increment">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="button decrement">
          Decrement
        </button>
        <button onClick={() => setCount(0)} className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
