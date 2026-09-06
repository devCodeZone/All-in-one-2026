export default function JSXProps() {
  const user = { name: "Sujata", role: "Senior Frontend Developer" };

  // JSX lets us describe UI with JavaScript expressions inside {}.
  // Props pass data from parent to child components.
  function ProfileCard({ name, role }) {
    return (
      <div className="card">
        <strong>{name}</strong>
        <p>{role}</p>
      </div>
    );
  }

  return (
    <div className="demo">
      <h2>JSX + Props</h2>
      <p className="interview-line">
        Interview one-liner: JSX is syntax for describing React UI, while props are read-only inputs passed from parent to child.
      </p>
      <ProfileCard name={user.name} role={user.role} />
    </div>
  );
}
