// Capstone: Build a Notes App
// Time to put it all together! Build a simple notes application using everything you've learned.

// Requirements
// Custom Hook useNotes:

// Manages an array of notes in state
// Each note: { id, text }
// Returns: { notes, addNote, deleteNote }
// addNote(text) creates a note with a unique id (use Date.now())
// deleteNote(id) removes a note by id
// Add Note Form:

// Input with id "note-input" for typing
// Button with id "add-btn" to add the note
// Clear input after adding
// Don't add empty notes
// Notes List:

// <ul id="notes-list"> containing all notes
// Each <li> displays the note text and a delete button with className="delete-btn"
// Note Count:

// <span id="note-count"> showing the number of notes
// Structure
// App
// ├── Note input + Add button
// ├── Note count
// └── Notes list
//     └── Note item (text + delete button) × N
// This is the final challenge — use state, events, lists, custom hooks, and composition!

function useNotes() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    if (!text.trim()) return;
    setNotes([...notes, { id: Date.now(), text: text.trim() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return { notes, addNote, deleteNote };
}

function App() {
  const {notes, addNote, deleteNote} = useNotes();
  const [note, setNote] = useState("");

  const handleClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <h1>My Notes</h1>
      <div>
        <input
          type="text"
          id="note-input"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button id="add-btn" onClick={handleClick}>
          Add
        </button>
      </div>
      <span id="note-count">{notes.length}</span>
      <div>
        <ul id="notes-list">
          {notes.map((note) => (
            <li key={note.id}>
              <p>{note.text}</p>
              <button
                className="delete-btn"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
