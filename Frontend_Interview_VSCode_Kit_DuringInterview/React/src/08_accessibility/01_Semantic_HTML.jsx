export default function SemanticHTML() {
  return (
    <div className="demo">
      <h2>Semantic HTML</h2>
      <p className="interview-line">
        Interview one-liner: Prefer native semantic elements because they provide built-in keyboard and accessibility behavior before adding ARIA.
      </p>
      <nav aria-label="Primary"><a href="#main">Skip to content</a></nav>
      <main id="main">
        <article>
          <h3>Accessible article</h3>
          <button>Native button</button>
        </article>
      </main>
    </div>
  );
}
