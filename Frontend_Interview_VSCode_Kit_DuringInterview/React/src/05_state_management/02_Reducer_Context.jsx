import { createContext, useContext, useReducer } from "react";

const StoreContext = createContext(null);

function reducer(state, action) {
  if (action.type === "add") return { count: state.count + 1 };
  if (action.type === "remove") return { count: Math.max(0, state.count - 1) };
  return state;
}

function CartButtons() {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <>
      <p>Cart items: {state.count}</p>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "remove" })}>Remove</button>
    </>
  );
}

export default function ReducerContext() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="demo">
      <h2>Reducer + Context Store</h2>
      <p className="interview-line">
        Interview one-liner: Reducer plus Context is a lightweight global-state pattern for explicit transitions without an external library.
      </p>
      <StoreContext.Provider value={{ state, dispatch }}><CartButtons /></StoreContext.Provider>
    </div>
  );
}
