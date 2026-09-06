import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", city: "" });

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function valid() {
    if (step === 1 && !form.name.trim()) return alert("Enter name"), false;
    if (step === 2 && !form.email.trim()) return alert("Enter email"), false;
    if (step === 3 && !form.city.trim()) return alert("Enter city"), false;
    return true;
  }

  return (
    <div className="demo">
      <h2>System Design: Multi-Step Form Wizard</h2>
      <p className="interview-line">
        Interview one-liner: Keep shared wizard state above steps, validate per step, preserve values across navigation, and persist drafts when appropriate.
      </p>
      <p>Step {step}/4</p>
      {step === 1 && <input name="name" value={form.name} onChange={update} placeholder="Name" />}
      {step === 2 && <input name="email" value={form.email} onChange={update} placeholder="Email" />}
      {step === 3 && <input name="city" value={form.city} onChange={update} placeholder="City" />}
      {step === 4 && <pre>{JSON.stringify(form, null, 2)}</pre>}
      <div className="row">
        {step > 1 && <button onClick={() => setStep((s) => s - 1)}>Previous</button>}
        {step < 4 && <button onClick={() => valid() && setStep((s) => s + 1)}>Next</button>}
        <button onClick={() => localStorage.setItem("wizard-draft", JSON.stringify(form))}>Save Draft</button>
      </div>
    </div>
  );
}
