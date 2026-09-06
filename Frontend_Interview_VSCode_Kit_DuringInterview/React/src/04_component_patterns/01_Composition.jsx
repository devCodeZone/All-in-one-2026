function Card({ header, children, footer }) {
  return (
    <div className="card">
      <header>{header}</header>
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  );
}

export default function CompositionDemo() {
  return (
    <div className="demo">
      <h2>Composition</h2>
      <p className="interview-line">
        Interview one-liner: Composition builds flexible components by combining smaller components instead of relying on inheritance.
      </p>
      <Card header={<h3>Profile</h3>} footer={<small>Reusable slot</small>}>
        <p>Content is passed through children.</p>
      </Card>
    </div>
  );
}
