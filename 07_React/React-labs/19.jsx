// Fix the Bug: The Missing Cleanup
// This component has a timer that increments a seconds counter every second. There's also a separate click counter. But something is wrong — every time you click the Increment button, the timer seems to speed up. After a few clicks, seconds are flying by.

// Symptoms
// Timer starts correctly at 1 tick/second
// After clicking Increment a few times, the timer accelerates
// Eventually the seconds counter is updating multiple times per second
// Your Task
// Fix the useEffect so that:

// The timer always ticks at exactly 1 second intervals
// Clicking Increment doesn't affect the timer speed
// No intervals are left running when they shouldn't be
// Think about it: What happens to the old interval when useEffect runs again?

function App() {
  const [seconds, setSeconds] = useState(0);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
  }, []);

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