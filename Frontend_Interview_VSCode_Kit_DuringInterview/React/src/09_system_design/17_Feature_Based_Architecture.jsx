export default function FeatureArchitecture() {
  return (
    <div className="demo">
      <h2>System Design: Feature-Based Architecture</h2>
      <p className="interview-line">
        Interview one-liner: Feature-based architecture colocates UI, hooks, services, state, and tests by business capability so ownership and scaling stay clear.
      </p>
      <pre>{`src/
  features/
    checkout/
      components/
      hooks/
      api/
      state/
      tests/
    profile/
      components/
      hooks/
      api/
  shared/
    ui/
    utils/
    hooks/`}</pre>
    </div>
  );
}
