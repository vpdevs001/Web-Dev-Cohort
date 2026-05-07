// Your Task
// Build a login/logout toggle:

// Track isLoggedIn state, starting as false
// When logged out:
// Show <p id="status"> with text "Please log in"
// Show a button with id "login-btn" and text "Log In"
// When logged in:
// Show <p id="status"> with text "Welcome back!"
// Show a button with id "logout-btn" and text "Log Out"
// Add a <span id="badge"> that only appears when logged in, containing "Online"

const LoggedInScreen = ({ onLogout }) => (
  <div>
    <p id="status">Welcome back!</p>
    <button id="logout-btn" onClick={onLogout}>
      Log Out
    </button>
    <span id="badge">Online</span>
  </div>
);

const LoginScreen = ({ onLogin }) => (
  <div>
    <p id="status">Please log in</p>
    <button id="login-btn" onClick={onLogin}>
      Log In
    </button>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <LoggedInScreen onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
