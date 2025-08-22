import React, { useState } from "react";
import Globe3D from "./Globe3D";
import ToggleButtons from "./ToggleButtons";
import PinPopup from "./PinPopup";

const places = [
  {
    type: "academic",
    name: "MIT",
    lat: 42.3601,
    lng: -71.0942,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_Dome_night1.jpg",
    description: "Graduated from MIT."
  },
  {
    type: "academic",
    name: "Stanford",
    lat: 37.4275,
    lng: -122.1697,
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Stanford_University_campus_from_above.jpg",
    description: "Exchange semester at Stanford."
  },
  {
    type: "personal",
    name: "Paris",
    lat: 48.8566,
    lng: 2.3522,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Paris_Night.jpg",
    description: "Visited Paris for vacation."
  },
  {
    type: "personal",
    name: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Sydney_Opera_House_-_Dec_2008.jpg",
    description: "Lived in Sydney for 2 years."
  }
];

export default function App() {
  const [mode, setMode] = useState("academic");
  const [activePin, setActivePin] = useState(null);

  const filteredPlaces = places.filter(p => p.type === mode);

  const handleNext = () => {
    if (!activePin) return;
    const idx = filteredPlaces.findIndex(p => p.name === activePin.name);
    const nextIdx = (idx + 1) % filteredPlaces.length;
    setActivePin(filteredPlaces[nextIdx]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111", position: "relative" }}>
      <ToggleButtons mode={mode} setMode={setMode} />
      <Globe3D
        places={filteredPlaces}
        onPinClick={setActivePin}
        activePin={activePin}
      />
      {activePin && (
        <PinPopup
          place={activePin}
          onClose={() => setActivePin(null)}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
