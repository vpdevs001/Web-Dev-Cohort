// Fix the Bug: The Conditional Hook
// This profile component has a "Show Details" toggle. When details are shown, additional info is displayed. But toggling it crashes the entire app with a hooks error.

// Symptoms
// Initial render works fine
// Clicking "Show Details" crashes the app
// Error: "Rendered more hooks than during the previous render"
// Your Task
// Fix the code so that:

// Toggling "Show Details" works without crashing
// When checked, shows the detail fields
// When unchecked, hides them
// All hooks must follow the Rules of Hooks
// Think about it: What is the #1 rule of React Hooks?

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [name] = useState("Alice");
  const [bio] = useState("React developer from NYC");
  const [joined] = useState("January 2025");

  return (
    <div>
      <h2 id="name">{name}</h2>
      <label>
        <input
          id="toggle"
          type="checkbox"
          checked={showDetails}
          onChange={(e) => setShowDetails(e.target.checked)}
        />
        Show Details
      </label>
      {showDetails && (
        <div id="details">
          <p id="bio">Bio: {bio}</p>
          <p id="joined">Joined: {joined}</p>
        </div>
      )}
    </div>
  );
}
