export default function TokenStorageConcept() {
  return (
    <div className="demo">
      <h2>Authentication Token Storage</h2>
      <p className="interview-line">
        Interview one-liner: Prefer secure, HttpOnly, SameSite cookies for sensitive session tokens where architecture allows; frontend route guards are UX, not authorization.
      </p>
      <div className="card">Avoid putting long-lived sensitive tokens into easily script-readable storage when a safer server-managed session is available.</div>
    </div>
  );
}
