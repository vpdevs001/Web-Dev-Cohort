// Fix the Bug: The Frozen Counter
// The counter component below renders correctly at first — you see "Count: 0" and two buttons. But when you click Increment or Decrement, nothing happens. The count stays frozen at 0.

// Symptoms
// Initial render looks correct
// Clicking buttons has no visible effect
// No errors in the console
// Your Task
// Find and fix the bug so that:

// Clicking Increment increases the count
// Clicking Decrement decreases the count
// Think about it: How does React know to re-render a component?

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => Math.max(count - 1, 0));
  };

  return (
    <div>
      <h2 id="count">Count: {count}</h2>
      <button id="increment" onClick={increment}>
        Increment
      </button>
      <button id="decrement" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
