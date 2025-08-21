import React from "react";
export default function PinPopup({ place, onClose, onNext }) {
  return (
    <div style={{
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 20,
      background: "#fff",
      color: "#222",
      padding: 20,
      borderRadius: 12,
      boxShadow: "0 0 20px #0008",
      minWidth: 320,
      textAlign: "center"
    }}>
      <h2>{place.name}</h2>
      <img
        src={place.img}
        alt={place.name}
        style={{ width: "90%", borderRadius: 8, marginBottom: 10 }}
      />
      <p>{place.description}</p>
      <div style={{ marginTop: 12 }}>
        <button onClick={onClose} style={{ marginRight: 10 }}>Close</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}