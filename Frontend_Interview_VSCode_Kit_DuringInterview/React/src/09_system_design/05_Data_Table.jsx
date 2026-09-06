import { useMemo, useState } from "react";

const USERS = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `User ${i + 1}`, age: 20 + (i % 25) }));

export default function DataTable() {
  const [search, setSearch] = useState("");
  const [asc, setAsc] = useState(true);
  const [page, setPage] = useState(1);
  const size = 5;

  const processed = useMemo(() => USERS
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)),
    [search, asc]
  );

  const totalPages = Math.max(1, Math.ceil(processed.length / size));
  const visible = processed.slice((page - 1) * size, page * size);

  return (
    <div className="demo">
      <h2>System Design: Data Table</h2>
      <p className="interview-line">
        Interview one-liner: Use client-side operations for small datasets, server-side sorting/filtering/pagination for large datasets, and virtualization for large rendered row counts.
      </p>
      <input value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Filter" />
      <button onClick={() => setAsc((x) => !x)}>Sort {asc ? "↑" : "↓"}</button>
      <table>
        <thead><tr><th>ID</th><th>Name</th><th>Age</th></tr></thead>
        <tbody>{visible.map((u) => <tr key={u.id}><td>{u.id}</td><td>{u.name}</td><td>{u.age}</td></tr>)}</tbody>
      </table>
      <div className="row">
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
        <span>Page {page}/{totalPages}</span>
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
    </div>
  );
}
