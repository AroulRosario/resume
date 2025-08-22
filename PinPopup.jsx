import React from "react";

export default function PinPopup({ place, onClose, onNext }) {
  if (!place) return null;

  return (
    <div style={{
      position: "absolute",
      left: "50%",
      top: "10%",
      transform: "translateX(-50%)",
      background: "#222",
      color: "#fff",
      padding: "24px",
      borderRadius: "12px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
      width: "320px",
      zIndex: 10
    }}>
      <img
        src={place.img}
        alt={place.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }}
      />
      <h2 style={{ margin: "0 0 8px 0" }}>{place.name}</h2>
      <p style={{ marginBottom: "16px" }}>{place.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={onClose}
          style={{
            background: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px"
          }}
        >
          Close
        </button>
        <button
          onClick={onNext}
          style={{
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 16px"
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
