// Fix the Bug: The Infinite Loop
// This component is supposed to fetch a greeting message and display it. But as soon as it mounts, the browser freezes with a "Too many re-renders" error.

// Symptoms
// Browser tab becomes unresponsive
// Console shows: "Too many re-renders. React limits the number of renders to prevent an infinite loop."
// Component never displays properly
// Your Task
// Fix the code so that:

// The message is set only once when the component mounts
// No infinite re-render loop occurs
// The greeting displays correctly
// Think about it: What happens when you call setState during every render?

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Hello from React!");
  }, []);

  return (
    <div>
      <h2 id="greeting">{message}</h2>
      <p id="status">Loaded successfully</p>
    </div>
  );
}
