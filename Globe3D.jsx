import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

export default function Globe3D({ places, onPinClick, activePin }) {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-focus on active pin
    if (activePin && globeEl.current) {
      globeEl.current.pointOfView({ lat: activePin.lat, lng: activePin.lng, altitude: 1.5 }, 1000);
    }
  }, [activePin]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={places}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={0.03}
        pointColor={d => (d.type === "academic" ? "#3498db" : "#e67e22")}
        pointRadius={0.15}
        onPointClick={onPinClick}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
}
