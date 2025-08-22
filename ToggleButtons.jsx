import React from "react";

export default function ToggleButtons({ mode, setMode }) {
  return (
    <div style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }}>
      <button
        style={{
          marginRight: 10,
          padding: "8px 16px",
          background: mode === "academic" ? "#3498db" : "#555",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
        onClick={() => setMode("academic")}
      >
        Academic
      </button>
      <button
        style={{
          padding: "8px 16px",
          background: mode === "personal" ? "#e67e22" : "#555",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
        onClick={() => setMode("personal")}
      >
        Personal
      </button>
    </div>
  );
}
