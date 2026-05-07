// Fix the Bug: The Disappearing List
// This todo list lets you add and delete items. But when you delete an item from the middle of the list, strange things happen — wrong items disappear, or the list gets jumbled.

// Symptoms
// Adding items works fine
// Deleting the last item works
// Deleting from the middle causes wrong items to be removed
// React may show a warning about keys in the console
// Your Task
// Fix the list rendering so that:

// Each item can be correctly deleted
// The list updates predictably
// No React key warnings
// Think about it: How does React identify which item is which in a list?

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Fix bugs" },
    { id: 3, text: "Ship code" },
  ]);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul id="todo-list">
        {items.map((item, index) => (
          <li key={item.id}>
            <span className="item-text">{item.text}</span>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
