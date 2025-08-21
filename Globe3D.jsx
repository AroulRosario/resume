import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Pin from "./Pin";

function Globe({ activePin, focusPin }) {
  const meshRef = useRef();
  useFrame(() => {
    if (!activePin) {
      meshRef.current.rotation.y += 0.003;
    }
    // Optional: animate to focusPin if activePin changes
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={null}
        color="#2a3d66"
        wireframe={false}
        roughness={0.7}
      />
    </mesh>
  );
}

export default function Globe3D({ places, onPinClick, activePin }) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />
        <Globe activePin={activePin} />
        {places.map(place =>
          <Pin
            key={place.name}
            place={place}
            active={activePin && activePin.name === place.name}
            onClick={() => onPinClick(place)}
          />
        )}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={!activePin}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}