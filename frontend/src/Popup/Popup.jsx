import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popup.css";

export default function Popup() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // Load selected text from Chrome storage
  useEffect(() => {
    chrome.storage.local.get("selectedText", (data) => {
      if (data.selectedText) setText(data.selectedText);
    });
  }, []);

  const handleSummarize = async () => {
    if (!text.trim()) return alert("Please select or enter text");
    setLoading(true);
    setSummary("");

    try {
      const res = await axios.post(
        "http://localhost:8080/api/gemini/summarize",
        text,
        { headers: { "Content-Type": "text/plain" } }
      );
      setSummary(res.data);
    } catch (err) {
      console.error(err);
      setSummary("❌ Error generating summary");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    alert("✅ Copied to clipboard!");
  };

  return (
    <div className="popup-container">
      <h2>AI Summarizer</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or select text..."
      />

      <button className="summarize-btn" onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div className="summary-box">
          <pre>{summary}</pre>
          <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
        </div>
      )}
    </div>
  );
}
