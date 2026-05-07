// Component Composition
// React favors composition over inheritance. The children prop lets you nest content inside components.

// The children Pattern
// function Card({ children, title }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <div className="card-body">{children}</div>
//     </div>
//   );
// }

// // Usage
// <Card title="Profile">
//   <p>This is the card content!</p>
// </Card>
// Your Task
// Create a Card component that:

// Accepts title (string) and children props
// Renders a wrapper <div className="card">
// Shows the title in <div className="card-header">
// Renders children inside <div className="card-body">
// Create an Alert component that:

// Accepts type prop ("info", "success", "warning") and children
// Renders <div className="alert alert-{type}">
// Renders children inside
// In App, compose them:

// A Card with title "Notifications" containing:
// An Alert of type "success" with text "Task completed!"
// An Alert of type "warning" with text "Low disk space"

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}

function Alert({ type, children }) {
  return (
    <div className={"alert alert-" + type}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Notifications">
        <Alert type="success">Task completed!</Alert>
        <Alert type="warning">Low disk space</Alert>
      </Card>
    </div>
  );
}