import { createContext, useContext, useState } from "react";

const TabsContext = createContext(null);

function Tabs({ children }) {
  const [active, setActive] = useState("one");
  return <TabsContext.Provider value={{ active, setActive }}>{children}</TabsContext.Provider>;
}

Tabs.List = function List({ children }) { return <div className="row">{children}</div>; };
Tabs.Tab = function Tab({ id, children }) {
  const { active, setActive } = useContext(TabsContext);
  return <button aria-selected={active === id} onClick={() => setActive(id)}>{children}</button>;
};
Tabs.Panel = function Panel({ id, children }) {
  const { active } = useContext(TabsContext);
  return active === id ? <div className="card">{children}</div> : null;
};

export default function CompoundComponents() {
  return (
    <div className="demo">
      <h2>Compound Components</h2>
      <p className="interview-line">
        Interview one-liner: Compound components share implicit state through context while exposing a flexible, declarative API.
      </p>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab id="one">Overview</Tabs.Tab>
          <Tabs.Tab id="two">Details</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="one">Overview content</Tabs.Panel>
        <Tabs.Panel id="two">Details content</Tabs.Panel>
      </Tabs>
    </div>
  );
}
