import { useMemo, useState } from "react";

// Vite loads every JSX demo inside numbered folders.
// Files starting with "_" are helpers and are hidden from the menu.
const modules = import.meta.glob("./**/*.jsx", { eager: true });

function titleFromPath(path) {
  const file = path.split("/").pop().replace(".jsx", "");
  return file.replace(/^\d+_/, "").replaceAll("_", " ");
}

function folderFromPath(path) {
  const folder = path.split("/")[1] || "Other";
  return folder.replace(/^\d+_/, "").replaceAll("_", " ");
}

export default function App() {
  const demos = useMemo(() => {
    return Object.entries(modules)
      .filter(([path, mod]) => {
        const file = path.split("/").pop();
        return (
          path !== "./App.jsx" &&
          !file.startsWith("_") &&
          typeof mod.default === "function"
        );
      })
      .map(([path, mod]) => ({
        path,
        title: titleFromPath(path),
        folder: folderFromPath(path),
        Component: mod.default,
      }))
      .sort((a, b) => a.path.localeCompare(b.path));
  }, []);

  const [selectedPath, setSelectedPath] = useState(demos[0]?.path ?? "");
  const selected = demos.find((d) => d.path === selectedPath) ?? demos[0];

  const grouped = demos.reduce((acc, demo) => {
    (acc[demo.folder] ||= []).push(demo);
    return acc;
  }, {});

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Senior React Interview Kit</h1>
        <p className="muted">Runnable demos + interview one-liners</p>

        {Object.entries(grouped).map(([folder, items]) => (
          <section key={folder} className="menu-section">
            <h3>{folder}</h3>
            {items.map((item) => (
              <button
                key={item.path}
                className={item.path === selectedPath ? "menu-btn active" : "menu-btn"}
                onClick={() => setSelectedPath(item.path)}
              >
                {item.title}
              </button>
            ))}
          </section>
        ))}
      </aside>

      <main className="content">
        {selected ? <selected.Component /> : <p>No demos found.</p>}
      </main>
    </div>
  );
}
