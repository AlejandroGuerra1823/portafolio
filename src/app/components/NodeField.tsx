"use client";

/**
 * Agent-network particle field: points connected by edges, slowly rotating,
 * with gentle mouse parallax. Rendered as a hero background accent.
 * Loaded lazily (next/dynamic) and skipped on mobile / reduced motion.
 */

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 110;
const LINK_DISTANCE = 1.35;

function Network() {
  const group = useRef<THREE.Group>(null);

  const { positions, linePositions } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      // random points in a flattened ellipsoid shell
      const vector = new THREE.Vector3(
        (Math.random() - 0.5) * 7.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 3.0,
      );
      pts.push(vector);
    }
    const positionArray = new Float32Array(pts.length * 3);
    pts.forEach((point, i) => point.toArray(positionArray, i * 3));

    const segments: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < LINK_DISTANCE) {
          segments.push(...pts[i].toArray(), ...pts[j].toArray());
        }
      }
    }
    return { positions: positionArray, linePositions: new Float32Array(segments) };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.05;
    // gentle parallax toward the pointer
    const targetX = state.pointer.y * 0.12;
    const targetZ = state.pointer.x * 0.1;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.04;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3fd6c2"
          size={0.045}
          sizeAttenuation
          transparent
          opacity={0.85}
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#2a6b70"
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function NodeField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      <Network />
    </Canvas>
  );
}
