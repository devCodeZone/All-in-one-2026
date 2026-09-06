import { useState } from "react";

export default function ConditionalRendering() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="demo">
      <h2>Conditional Rendering</h2>
      <p className="interview-line">
        Interview one-liner: React conditionally renders UI using normal JavaScript such as if, ternary, and logical AND.
      </p>
      <p>{loggedIn ? "Welcome back!" : "Please sign in."}</p>
      <button onClick={() => setLoggedIn((v) => !v)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
