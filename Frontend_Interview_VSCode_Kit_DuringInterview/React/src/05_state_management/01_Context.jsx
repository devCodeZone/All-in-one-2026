import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function Toolbar() {
  const { theme, toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Theme: {theme}</button>;
}

export default function ContextDemo() {
  const [theme, setTheme] = useState("light");
  const value = { theme, toggle: () => setTheme((t) => t === "light" ? "dark" : "light") };

  return (
    <div className="demo">
      <h2>Context API</h2>
      <p className="interview-line">
        Interview one-liner: Context shares cross-cutting values without prop drilling, but broad updates can re-render consumers.
      </p>
      <ThemeContext.Provider value={value}><Toolbar /></ThemeContext.Provider>
    </div>
  );
}
