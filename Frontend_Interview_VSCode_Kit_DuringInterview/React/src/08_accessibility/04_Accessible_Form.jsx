import { useId } from "react";

export default function AccessibleForm() {
  const emailId = useId();
  const helpId = useId();

  return (
    <div className="demo">
      <h2>Accessible Form</h2>
      <p className="interview-line">
        Interview one-liner: Accessible forms need programmatic labels, clear instructions, keyboard usability, and errors associated with their fields.
      </p>
      <label htmlFor={emailId}>Work email</label>
      <input id={emailId} type="email" aria-describedby={helpId} />
      <small id={helpId}>Use your company email address.</small>
    </div>
  );
}
