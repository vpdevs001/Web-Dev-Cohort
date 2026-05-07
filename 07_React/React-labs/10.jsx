// Custom Hooks
// A custom hook is a function that starts with use and can call other hooks. It lets you extract reusable stateful logic.

import { useState } from "react";

// Example
// function useToggle(initial = false) {
//   const [value, setValue] = useState(initial);
//   const toggle = () => setValue(v => !v);
//   return [value, toggle];
// }

// // Usage
// function App() {
//   const [isOn, toggle] = useToggle(false);
//   return <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>;
// }
// Your Task
// Create a custom hook called useCounter that:

// Accepts an initialValue parameter (default: 0)
// Returns an object: { count, increment, decrement, reset }
// increment adds 1, decrement subtracts 1, reset goes back to initial
// Use useCounter in TWO separate components:

// CounterA: uses useCounter(0), renders in a div with id "counter-a"
// CounterB: uses useCounter(10), renders in a div with id "counter-b"
// Each should display the count in a <span className="count"> and have increment/decrement buttons
// Crucially, each counter should work independently — clicking one doesn't affect the other.

// Create your useCounter hook here

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
}

function CounterA() {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div id="counter-a">
      <span className="count">{count}</span>
      <button className="inc" onClick={increment}>
        +
      </button>
      <button className="dec" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

function CounterB() {
  const { count, increment, decrement, reset } = useCounter(10);
  return (
    <div id="counter-b">
      <span className="count">{count}</span>
      <button className="inc" onClick={increment}>
        +
      </button>
      <button className="dec" onClick={decrement}>
        -
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CounterA />
      <CounterB />
    </div>
  );
}