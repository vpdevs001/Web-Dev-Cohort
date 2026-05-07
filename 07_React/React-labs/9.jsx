// Context API
// When data needs to be accessed by many components at different nesting levels, Context lets you pass it without threading props through every level.

// How It Works
// // 1. Create context
// const ThemeContext = createContext('light');

// // 2. Provide value at top level
// <ThemeContext.Provider value="dark">
//   <App />
// </ThemeContext.Provider>

// // 3. Consume anywhere below
// function Button() {
//   const theme = useContext(ThemeContext);
//   return <button className={theme}>Click</button>;
// }
// Your Task
// Build a theme switcher using Context:

// Create a ThemeContext using createContext
// In App, track theme state ("light" or "dark"), starting with "light"
// Wrap children in ThemeContext.Provider with value { theme, toggleTheme }
// Create a ThemeDisplay component that:
// Uses useContext(ThemeContext) to read the theme
// Renders <div id="theme-display"> with text "Current theme: light" or "dark"
// Renders a button with id "toggle-btn" that calls toggleTheme
// ThemeDisplay must NOT receive theme as a prop — it must use Context
// The key idea: ThemeDisplay reads the theme from Context, not from props.

const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div id="theme-display">Current theme: {theme}</div>
      <button
        id="toggle-btn"
        onClick={() =>
          setTheme((theme) => (theme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? "Switch to Dark" : "Switch to Light"}
      </button>
    </ThemeContext.Provider>
  );
}
