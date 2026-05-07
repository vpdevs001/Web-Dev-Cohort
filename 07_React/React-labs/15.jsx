// Fix the Bug: The Stale Closure
// This counter has an "Add 3" button that calls increment() three times in a row. You'd expect the count to go up by 3, but it only goes up by 1.

// Symptoms
// Single "Increment" click works (adds 1)
// "Add 3" button only adds 1 instead of 3
// The three calls seem to "overwrite" each other
// Your Task
// Fix the increment function so that calling it 3 times actually adds 3.

// Think about it: When increment runs, what value of count does it see?

function App() {
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, [clicks]);

  return (
    <div>
      <h2 id="seconds">Seconds: {seconds}</h2>
      <h2 id="clicks">Clicks: {clicks}</h2>
      <button id="increment" onClick={() => setClicks(clicks + 1)}>
        Increment
      </button>
    </div>
  );
}
