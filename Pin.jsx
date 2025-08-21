import React from "react";
import { animated, useSpring } from "@react-spring/three";

// Convert lat/lng to 3D globe coordinates
function latLngToXYZ(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

export default function Pin({ place, active, onClick }) {
  const radius = 2.01;
  const [x, y, z] = latLngToXYZ(place.lat, place.lng, radius);

  // Animate pin scale when active
  const spring = useSpring({ scale: active ? 2 : 1 });

  return (
    <animated.mesh
      position={[x, y, z]}
      scale={spring.scale}
      onClick={onClick}
      castShadow
    >
      <sphereGeometry args={[0.07, 16, 16]} />
      <meshStandardMaterial color={active ? "red" : "yellow"} />
    </animated.mesh>
  );
}