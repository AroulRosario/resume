import React from "react";
export default function ToggleButtons({ mode, setMode }) {
  return (
    <div style={{
      position: "absolute", top: 20, left: 20, zIndex: 10, display: "flex", gap: 10
    }}>
      <button
        style={{
          padding: "10px 20px", fontWeight: mode === "academic" ? "bold" : "", borderRadius: 8
        }}
        onClick={() => setMode("academic")}
        disabled={mode === "academic"}
      >Academic</button>
      <button
        style={{
          padding: "10px 20px", fontWeight: mode === "personal" ? "bold" : "", borderRadius: 8
        }}
        onClick={() => setMode("personal")}
        disabled={mode === "personal"}
      >Personal</button>
    </div>
  );
}