"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.18;
    meshRef.current.rotation.z += delta * 0.07;
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.4, 0.38, 128, 16]} />
      <meshStandardMaterial
        color="#b9bec4"
        metalness={0.85}
        roughness={0.25}
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

export default function BackgroundOrb() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 1]}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />
        <RotatingMesh />
      </Canvas>
    </div>
  );
}
