"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particlesCount = 3000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f0ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function NeonGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[40, 40, "#00f0ff", "#3d0038"]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function FloatingOrbs() {
  const orbs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5 - 5,
      ] as [number, number, number],
      scale: 0.1 + Math.random() * 0.3,
      color: ["#00f0ff", "#ff00e1", "#a6ff00"][i % 3],
      speed: 0.5 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <>
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} {...orb} index={i} />
      ))}
    </>
  );
}

function FloatingOrb({
  position,
  scale,
  color,
  speed,
  index,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed + index) * 2;
      meshRef.current.position.x =
        position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5 + index) * 1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <NeonGrid />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}
