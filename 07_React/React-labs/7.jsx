// Lists & Keys
// To render a list of items, use Array.map() to transform data into JSX elements.

// The key prop
// React needs a unique key for each item in a list so it can efficiently update the DOM:

// {items.map(item => (
//   <li key={item.id}>{item.text}</li>
// ))}
// Important: Never use array index as a key if the list can be reordered or filtered. Use a stable unique ID instead.

// Your Task
// Given this data:
// const todos = [
//   { id: 1, text: 'Learn React', done: true },
//   { id: 2, text: 'Build a project', done: false },
//   { id: 3, text: 'Deploy to production', done: false },
// ];
// Render all todos in a <ul id="todo-list">
// Each <li> should have data-id={todo.id} and display the text
// Completed todos should have className="done"
// Add a button with id "filter-btn" that toggles between showing all and active only (not done)
// Add a <span id="count"> showing the number of visible items
function App() {
  const todos = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Build a project", done: false },
    { id: 3, text: "Deploy to production", done: false },
  ];

  const [showAll, setShowAll] = useState(true);
  const visible = showAll ? todos : todos.filter((t) => !t.done);

  return (
    <div>
      <button id="filter-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Active" : "Show All"}
      </button>
      <span id="count">{visible.length}</span>
      <ul id="todo-list">
        {visible.map((todo) => (
          <li
            key={todo.id}
            data-id={todo.id}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}