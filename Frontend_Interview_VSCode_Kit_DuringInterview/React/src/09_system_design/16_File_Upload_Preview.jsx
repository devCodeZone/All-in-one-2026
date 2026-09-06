import { useEffect, useState } from "react";

export default function FileUploadPreview() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!file) { setUrl(""); return; }
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className="demo">
      <h2>System Design: File Upload Preview</h2>
      <p className="interview-line">
        Interview one-liner: File upload UX should validate type/size, preview safely, show progress, support cancellation, and let the server enforce final validation.
      </p>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      {url && <img src={url} alt="Selected preview" style={{ maxWidth: 280, display: "block", marginTop: 12 }} />}
    </div>
  );
}
