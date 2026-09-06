import { useState } from "react";

function ProtectedPage({ authenticated }) {
  if (!authenticated) return <p>Access denied. Please sign in.</p>;
  return <div className="card">Protected dashboard content</div>;
}

export default function AuthGuard() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="demo">
      <h2>System Design: Authentication Guard</h2>
      <p className="interview-line">
        Interview one-liner: The frontend guard improves UX, but authorization must always be enforced by the backend because client code is not a security boundary.
      </p>
      <button onClick={() => setAuthenticated((x) => !x)}>{authenticated ? "Logout" : "Login"}</button>
      <ProtectedPage authenticated={authenticated} />
    </div>
  );
}
