import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export default function ModalDialog() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);
  const previousFocus = useRef(null);

  useEffect(() => {
    if (!open) return;

    previousFocus.current = document.activeElement;
    document.body.style.overflow = "hidden";
    const focusable = modalRef.current?.querySelectorAll("button, input, [href], select, textarea, [tabindex]:not([tabindex='-1'])");
    focusable?.[0]?.focus();

    function keydown(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && focusable?.length) {
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }

    document.addEventListener("keydown", keydown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", keydown);
      previousFocus.current?.focus();
    };
  }, [open]);

  return (
    <div className="demo">
      <h2>System Design: Modal / Dialog</h2>
      <p className="interview-line">
        Interview one-liner: A production dialog uses a portal, focus trap, Escape handling, focus restoration, scroll lock, and correct ARIA semantics.
      </p>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && createPortal(
        <div className="modal-overlay" onMouseDown={() => setOpen(false)}>
          <div ref={modalRef} className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(e) => e.stopPropagation()}>
            <h3 id="modal-title">Delete item?</h3>
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Delete</button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
