// Fix the Bug: The Mutant Array
// This component lets you add fruit items to a list. But when you click "Add Item", nothing happens on screen. The list stays frozen, even though the code looks like it's adding items.

// Symptoms
// Clicking "Add Item" has no visible effect
// The list stays at its initial state
// No console errors
// Your Task
// Fix the addItem function so that new items actually appear in the list.

// Think about it: Does React detect the change if you mutate the existing array?

function App() {
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems((items) => [...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <div>
      <div>
        <input
          id="item-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a fruit..."
        />
        <button id="add-btn" onClick={addItem}>
          Add Item
        </button>
      </div>
      <ul id="item-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <span id="count">{items.length} items</span>
    </div>
  );
}
