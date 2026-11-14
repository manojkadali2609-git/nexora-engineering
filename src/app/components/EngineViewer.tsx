
"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

function EngineModel() {
  const { scene } = useGLTF("/models/engine.glb");

  const model = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;

        const materials = Array.isArray(object.material)
          ? object.material
          : [object.material];

        object.material = materials.map((material) => {
          const silver = material.clone();

          silver.color.set("#b9bec4");
          silver.metalness = 0.8;
          silver.roughness = 0.3;
          silver.map = null;

          return silver;
        });
      }
    });

    return clonedScene;
  }, [scene]);

  return (
    <Center>
      <primitive object={model} />
    </Center>
  );
}

export default function EngineViewer() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [4, 3, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 6, 5]} intensity={3} />
        <directionalLight position={[-5, 2, -4]} intensity={2} />
        <pointLight position={[0, 3, 3]} intensity={1.5} />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.3}>
            <EngineModel />
          </Bounds>
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/engine.glb");
