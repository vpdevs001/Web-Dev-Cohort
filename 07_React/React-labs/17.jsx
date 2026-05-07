// Fix the Bug: The Instant Fire
// This component has a button that should show an alert with the count when clicked. But the alert fires immediately when the component renders, and clicking the button does nothing.

// Symptoms
// Alert appears on page load (before any click)
// Clicking the button has no effect
// The count display works fine otherwise
// Your Task
// Fix the event handler so that:

// No alert on initial render
// Clicking the button shows the alert with the current count
// Think about it: What's the difference between onClick={fn()} and onClick={fn}?

function App() {
  const [count, setCount] = useState(0);

  const showAlert = () => {
    alert("Count is: " + count);
  };

  return (
    <div>
      <h2 id="count">Count: {count}</h2>
      <button id="increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button id="alert-btn" onClick={showAlert}>
        Show Count
      </button>
    </div>
  );
}
