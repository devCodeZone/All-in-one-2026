import { forwardRef, useRef } from "react";

const Button = forwardRef(function Button({ variant = "primary", size = "medium", loading = false, children, ...props }, ref) {
  const styles = {
    primary: { background: "#111827", color: "white" },
    secondary: { background: "#e5e7eb" },
    danger: { background: "#b91c1c", color: "white" },
  };

  return (
    <button
      ref={ref}
      style={{ ...styles[variant], padding: size === "small" ? "5px 8px" : "9px 14px" }}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
});

export default function DesignSystemButton() {
  const ref = useRef(null);

  return (
    <div className="demo">
      <h2>System Design: Design-System Button</h2>
      <p className="interview-line">
        Interview one-liner: A design-system component exposes a small consistent API for variants, states, theming, composition, accessibility, and ref access.
      </p>
      <div className="row">
        <Button ref={ref}>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button size="small">Small</Button>
        <Button loading>Save</Button>
      </div>
      <button onClick={() => ref.current?.focus()}>Focus Primary</button>
    </div>
  );
}
